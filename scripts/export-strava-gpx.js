const fs = require("fs/promises");
const path = require("path");
const { loadEnvConfig } = require("@next/env");

loadEnvConfig(process.cwd());

const OUTPUT_DIRECTORY = path.join(process.cwd(), "gpx");
const maximumImportsArgument = process.argv.find((argument) => argument.startsWith("--limit="));
const maximumImports = maximumImportsArgument
  ? Number(maximumImportsArgument.replace("--limit=", ""))
  : undefined;
const BIKE_ACTIVITY_TYPES = new Set([
  "Ride",
  "EBikeRide",
  "VirtualRide",
  "GravelRide",
  "MountainBikeRide",
]);

const escapeXml = (value) =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");

const getAccessToken = async () => {
  const response = await fetch("https://www.strava.com/oauth/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: process.env.STRAVA_CLIENT_ID,
      client_secret: process.env.STRAVA_CLIENT_SECRET,
      grant_type: "refresh_token",
      refresh_token: process.env.STRAVA_REFRESH_TOKEN,
    }),
  });

  if (!response.ok) {
    throw new Error(`Could not refresh the Strava access token (${response.status}).`);
  }

  const { access_token: accessToken } = await response.json();

  if (!accessToken) throw new Error("Strava did not return an access token.");

  return accessToken;
};

const requestStrava = async (url, accessToken) => {
  const response = await fetch(url, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  if (!response.ok) {
    throw new Error(`Strava request failed (${response.status}) for ${url}.`);
  }

  return {
    data: await response.json(),
    rateLimit: response.headers.get("x-ratelimit-limit"),
    rateUsage: response.headers.get("x-ratelimit-usage"),
  };
};

const getAllActivities = async (accessToken) => {
  const activities = [];
  let page = 1;

  while (true) {
    const { data } = await requestStrava(
      `https://www.strava.com/api/v3/athlete/activities?per_page=200&page=${page}`,
      accessToken
    );

    activities.push(...data);
    if (data.length < 200 || maximumImports) return activities;
    page += 1;
  }
};

const getExistingRides = async () => {
  const files = await fs.readdir(OUTPUT_DIRECTORY);
  const activityIds = new Set();
  const legacyRides = new Set();

  await Promise.all(
    files
      .filter((file) => file.endsWith(".gpx"))
      .map(async (file) => {
        const activityId = file.match(/^strava-(\d+)\.gpx$/)?.[1];
        if (activityId) activityIds.add(activityId);

        const fileContents = await fs.readFile(path.join(OUTPUT_DIRECTORY, file), "utf8");
        const name = fileContents.match(/<trk>\s*<name>([^<]+)<\/name>/)?.[1];
        const date = fileContents.match(/<metadata>[\s\S]*?<time>([^<]+)<\/time>/)?.[1];

        if (name && date) legacyRides.add(`${name}|${date}`);
      })
  );

  return { activityIds, legacyRides };
};

const formatGpx = (activity, streams) => {
  const startTime = new Date(activity.start_date).getTime();
  const points = streams.latlng.data.map(([latitude, longitude], index) => {
    const elevation = streams.altitude?.data[index];
    const elapsedSeconds = streams.time?.data[index];
    const time = Number.isFinite(elapsedSeconds)
      ? new Date(startTime + elapsedSeconds * 1000).toISOString()
      : undefined;

    return [
      `   <trkpt lat="${latitude}" lon="${longitude}">`,
      Number.isFinite(elevation) && `    <ele>${elevation}</ele>`,
      time && `    <time>${time}</time>`,
      "   </trkpt>",
    ]
      .filter(Boolean)
      .join("\n");
  });

  return `<?xml version="1.0" encoding="UTF-8"?>
<gpx creator="StravaGPX" version="1.1" xmlns="http://www.topografix.com/GPX/1/1">
 <metadata>
  <time>${activity.start_date}</time>
 </metadata>
 <trk>
  <name>${escapeXml(activity.name)}</name>
  <type>1</type>
  <trkseg>
${points.join("\n")}
  </trkseg>
 </trk>
</gpx>
`;
};

const reachedRateLimit = (rateLimit, rateUsage) => {
  const shortTermLimit = Number(rateLimit?.split(",")[0]);
  const shortTermUsage = Number(rateUsage?.split(",")[0]);

  return Number.isFinite(shortTermLimit) && shortTermUsage >= shortTermLimit - 2;
};

const main = async () => {
  const accessToken = await getAccessToken();
  const [activities, existingRides] = await Promise.all([
    getAllActivities(accessToken),
    getExistingRides(),
  ]);
  const rides = activities
    .filter((activity) => BIKE_ACTIVITY_TYPES.has(activity.sport_type || activity.type))
    .filter(
      (activity) =>
        !existingRides.activityIds.has(String(activity.id)) &&
        !existingRides.legacyRides.has(`${activity.name}|${activity.start_date}`)
    )
    .sort((a, b) => b.start_date.localeCompare(a.start_date))
    .slice(0, maximumImports);
  let saved = 0;
  let skipped = 0;

  for (const activity of rides) {
    const { data: streams, rateLimit, rateUsage } = await requestStrava(
      `https://www.strava.com/api/v3/activities/${activity.id}/streams?keys=latlng,altitude,time&key_by_type=true`,
      accessToken
    );

    if (!streams.latlng?.data || streams.latlng.data.length < 2) {
      skipped += 1;
      continue;
    }

    const filename = `strava-${activity.id}.gpx`;
    await fs.writeFile(path.join(OUTPUT_DIRECTORY, filename), formatGpx(activity, streams));
    saved += 1;

    console.log(`Saved ${filename} (${saved}/${rides.length})`);
    if (reachedRateLimit(rateLimit, rateUsage)) {
      console.log("Approaching Strava's 15-minute rate limit; re-run this command after the next window.");
      break;
    }
  }

  console.log(`Done. Saved ${saved} GPX files and skipped ${skipped} rides without route data.`);
};

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});

const { promises: fs } = require("fs");
const path = require("path");
const GpxParser = require("gpxparser");

const VIEWBOX_SIZE = 400;
const MAX_RENDER_POINTS = 300;
const MAX_SEGMENT_SPEED_METERS_PER_SECOND = 25;
const gpxDirectory = path.join(process.cwd(), "gpx");
const outputFile = path.join(process.cwd(), "data", "rides.json");

const toRoutePoints = (points) => {
  const coords = points.map(({ lat, lon }) => [lat, lon]);
  const latitudes = coords.map(([lat]) => lat);
  const longitudes = coords.map(([, lon]) => lon);
  const minLatitude = Math.min(...latitudes);
  const minLongitude = Math.min(...longitudes);
  const largestRange = Math.max(
    Math.max(...latitudes) - minLatitude,
    Math.max(...longitudes) - minLongitude,
    Number.EPSILON
  );
  const scale = VIEWBOX_SIZE / largestRange;
  const step = Math.max(1, Math.ceil(coords.length / MAX_RENDER_POINTS));

  return coords
    .filter((_, index) => index % step === 0 || index === coords.length - 1)
    .map(
      ([lat, lon]) =>
        `${((lat - minLatitude) * scale).toFixed(1)},${(
          (lon - minLongitude) * scale
        ).toFixed(1)}`
    )
    .join(" ");
};

const calculateSafeDistance = (track) => {
  return track.points.slice(1).reduce((totalDistance, point, index) => {
    const previousPoint = track.points[index];
    const segmentDistance =
      track.distance.cumul[index] - (track.distance.cumul[index - 1] || 0);
    const elapsed = new Date(point.time) - new Date(previousPoint.time);
    const speed = elapsed > 0 ? segmentDistance / (elapsed / 1000) : Infinity;

    return speed <= MAX_SEGMENT_SPEED_METERS_PER_SECOND
      ? totalDistance + segmentDistance
      : totalDistance;
  }, 0);
};

const parseRide = async (filename) => {
  const filePath = path.join(gpxDirectory, filename);
  const xml = await fs.readFile(filePath, "utf8");
  const gpx = new GpxParser();
  gpx.parse(xml);

  const track = gpx.tracks[0];
  if (!track?.points?.length) return null;

  return {
    id: filename.replace(/\.gpx$/, "").replace(/^strava-/, ""),
    name: track.name || "Untitled ride",
    date: gpx.metadata.time || track.points[0].time,
    distance: Math.round(calculateSafeDistance(track)),
    path: toRoutePoints(track.points),
  };
};

const writeIfChanged = async (contents) => {
  try {
    if ((await fs.readFile(outputFile, "utf8")) === contents) return false;
  } catch (error) {
    if (error.code !== "ENOENT") throw error;
  }

  await fs.mkdir(path.dirname(outputFile), { recursive: true });
  await fs.writeFile(outputFile, contents);
  return true;
};

const main = async () => {
  const filenames = (await fs.readdir(gpxDirectory))
    .filter((filename) => filename.endsWith(".gpx"))
    .sort();
  const rides = (await Promise.all(filenames.map(parseRide)))
    .filter(Boolean)
    .sort((a, b) => b.date.localeCompare(a.date));
  const changed = await writeIfChanged(`${JSON.stringify(rides, null, 2)}\n`);

  console.log(`Generated ${rides.length} rides${changed ? "" : " (unchanged)"}: ${path.relative(process.cwd(), outputFile)}`);
};

main().catch((error) => {
  console.error("Failed to generate rides:", error);
  process.exitCode = 1;
});

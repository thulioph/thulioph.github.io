const STRAVA_API_URL = "https://www.strava.com/api/v3";
const BIKE_ACTIVITY_TYPES = new Set(["Ride", "EBikeRide", "VirtualRide", "GravelRide", "MountainBikeRide"]);

const decodePolyline = (encodedPolyline) => {
  const coordinates = [];
  let index = 0;
  let latitude = 0;
  let longitude = 0;

  while (index < encodedPolyline.length) {
    let result = 0;
    let shift = 0;
    let byte;

    do {
      byte = encodedPolyline.charCodeAt(index++) - 63;
      result |= (byte & 0x1f) << shift;
      shift += 5;
    } while (byte >= 0x20);

    latitude += result & 1 ? ~(result >> 1) : result >> 1;

    result = 0;
    shift = 0;

    do {
      byte = encodedPolyline.charCodeAt(index++) - 63;
      result |= (byte & 0x1f) << shift;
      shift += 5;
    } while (byte >= 0x20);

    longitude += result & 1 ? ~(result >> 1) : result >> 1;
    coordinates.push([latitude / 1e5, longitude / 1e5]);
  }

  return coordinates;
};

const getAccessToken = async () => {
  const { STRAVA_ACCESS_TOKEN, STRAVA_CLIENT_ID, STRAVA_CLIENT_SECRET, STRAVA_REFRESH_TOKEN } =
    process.env;

  if (STRAVA_ACCESS_TOKEN) return STRAVA_ACCESS_TOKEN;

  if (!STRAVA_CLIENT_ID || !STRAVA_CLIENT_SECRET || !STRAVA_REFRESH_TOKEN) {
    throw new Error(
      "Missing Strava credentials. Set STRAVA_ACCESS_TOKEN or STRAVA_CLIENT_ID, STRAVA_CLIENT_SECRET, and STRAVA_REFRESH_TOKEN."
    );
  }

  const response = await fetch("https://www.strava.com/oauth/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: STRAVA_CLIENT_ID,
      client_secret: STRAVA_CLIENT_SECRET,
      grant_type: "refresh_token",
      refresh_token: STRAVA_REFRESH_TOKEN,
    }),
  });

  if (!response.ok) {
    throw new Error(`Could not refresh Strava access token (${response.status}).`);
  }

  const token = await response.json();

  if (!token.access_token) {
    throw new Error("Strava did not return an access token.");
  }

  return token.access_token;
};

const toRide = (activity) => {
  const polyline = activity.map?.summary_polyline;

  if (!polyline) return null;

  const coords = decodePolyline(polyline);

  if (coords.length < 2) return null;

  return {
    id: activity.id,
    name: activity.name,
    date: activity.start_date,
    distance: activity.distance,
    coords,
  };
};

export const getStravaRides = async () => {
  const accessToken = await getAccessToken();
  const response = await fetch(`${STRAVA_API_URL}/athlete/activities?per_page=200&page=1`, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  if (!response.ok) {
    throw new Error(`Could not load Strava activities (${response.status}).`);
  }

  const activities = await response.json();

  if (!Array.isArray(activities)) {
    throw new Error("Strava returned an invalid activities response.");
  }

  return activities
    .filter((activity) => BIKE_ACTIVITY_TYPES.has(activity.sport_type || activity.type))
    .map(toRide)
    .filter(Boolean)
    .sort((a, b) => b.date.localeCompare(a.date));
};

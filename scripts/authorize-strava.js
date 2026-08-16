const http = require("http");
const crypto = require("crypto");
const { loadEnvConfig } = require("@next/env");

loadEnvConfig(process.cwd());

const PORT = 3001;
const REDIRECT_URI = `http://localhost:${PORT}/strava/callback`;
const state = crypto.randomBytes(24).toString("hex");

const { STRAVA_CLIENT_ID, STRAVA_CLIENT_SECRET } = process.env;

if (!STRAVA_CLIENT_ID || !STRAVA_CLIENT_SECRET) {
  console.error("Set STRAVA_CLIENT_ID and STRAVA_CLIENT_SECRET in .env.local first.");
  process.exit(1);
}

const authorizationUrl = new URL("https://www.strava.com/oauth/authorize");
authorizationUrl.search = new URLSearchParams({
  client_id: STRAVA_CLIENT_ID,
  redirect_uri: REDIRECT_URI,
  response_type: "code",
  approval_prompt: "force",
  scope: "activity:read_all",
  state,
}).toString();

const exchangeCode = async (code) => {
  const response = await fetch("https://www.strava.com/oauth/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: STRAVA_CLIENT_ID,
      client_secret: STRAVA_CLIENT_SECRET,
      code,
      grant_type: "authorization_code",
    }),
  });

  if (!response.ok) {
    throw new Error(`Strava token exchange failed (${response.status}).`);
  }

  return response.json();
};

const server = http.createServer(async (request, response) => {
  const callbackUrl = new URL(request.url, REDIRECT_URI);

  if (callbackUrl.pathname !== "/strava/callback") {
    response.writeHead(404).end();
    return;
  }

  if (callbackUrl.searchParams.get("state") !== state) {
    response.writeHead(400).end("Invalid OAuth state. Please run the script again.");
    server.close();
    return;
  }

  const error = callbackUrl.searchParams.get("error");
  if (error) {
    response.writeHead(400).end(`Strava authorization failed: ${error}`);
    server.close();
    return;
  }

  try {
    const token = await exchangeCode(callbackUrl.searchParams.get("code"));

    response
      .writeHead(200, { "Content-Type": "text/html; charset=utf-8" })
      .end("<h1>Strava connected.</h1><p>You can close this tab and return to the terminal.</p>");

    console.log("\nAdd this value to .env.local and to your Vercel environment:");
    console.log(`STRAVA_REFRESH_TOKEN=${token.refresh_token}`);
  } catch (error) {
    response.writeHead(500).end("Could not exchange the Strava authorization code.");
    console.error(error.message);
  } finally {
    server.close();
  }
});

server.listen(PORT, () => {
  console.log("Open this URL in your browser and authorize the Strava app:\n");
  console.log(authorizationUrl.toString());
  console.log(`\nWaiting for the callback at ${REDIRECT_URI} ...`);
});

setTimeout(() => {
  console.error("Authorization timed out. Run the script again to start over.");
  server.close();
}, 5 * 60 * 1000).unref();

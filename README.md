This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

### env

First, create a `.env.local` file, filling it with the values from the `.env.example` file.

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Strava rides

`/rides` is generated from the GPX files in `gpx/`. To import cycling activities
from Strava, register an app in the [Strava developer portal](https://www.strava.com/settings/api),
authorize it with `activity:read` (or `activity:read_all` for private activities),
then add `STRAVA_CLIENT_ID`, `STRAVA_CLIENT_SECRET`, and `STRAVA_REFRESH_TOKEN`
to `.env.local`.

Run `yarn authorize:strava` and approve the displayed URL to obtain a fresh
`STRAVA_REFRESH_TOKEN`. Set the app's Authorization Callback Domain in Strava
to `localhost` before running it.

Run `yarn export:strava-gpx` to download any missing routes. Files are named
`strava-<activity-id>.gpx`, so re-running the script does not duplicate imports.
The page remains static and no Strava credential is shipped to visitors.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

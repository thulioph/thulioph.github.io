import React from "react";
import { promises as fs } from "fs";
import path from "path";

import AppHeader from "@/components/header";
import AppNav from "@/components/navbar";
import Hero from "@/components/hero";
import CoordsCard from "@/components/coords-card";
import RideSummary from "@/components/rides-summary";
import { splitByYear } from "@/utils/index";

const getSummary = (rides) => {
  const totals = rides.reduce(
    (summary, { date, distance }) => {
      const year = new Date(date).getFullYear();
      const yearSummary = summary.byYear[year] || { distance: 0 };

      summary.rides += 1;
      summary.distance += distance;
      summary.longestRide = Math.max(summary.longestRide, distance);
      yearSummary.distance += distance;
      summary.byYear[year] = yearSummary;

      return summary;
    },
    { rides: 0, distance: 0, longestRide: 0, byYear: {} }
  );

  return {
    ...totals,
    yearsActive: Object.keys(totals.byYear).length,
    byYear: Object.entries(totals.byYear).map(([year, values]) => ({
      year,
      ...values,
    })),
  };
};

const Rides = ({ ridesByYear, summary }) => {
  return (
    <React.Fragment>
      <AppHeader>Rides</AppHeader>
      <AppNav />

      <main className="page">
        <Hero description="Every ride, mapped.">Rides</Hero>

        <section className="internal-grid">
          <RideSummary summary={summary} />

          {ridesByYear.map(({ year, rides }) => (
            <React.Fragment key={year}>
              <h2>{year}</h2>
              <ol className="list-items-card">
                {rides.map(({ id, name, date, distance, path }) => (
                  <li key={id}>
                    <CoordsCard path={path} date={date} distance={distance}>
                      {name}
                    </CoordsCard>
                  </li>
                ))}
              </ol>
            </React.Fragment>
          ))}
        </section>
      </main>
    </React.Fragment>
  );
};

export default Rides;

export async function getStaticProps() {
  const ridesFile = path.join(process.cwd(), "data", "rides.json");
  const rides = JSON.parse(await fs.readFile(ridesFile, "utf8"));

  return {
    props: {
      ridesByYear: splitByYear(rides),
      summary: getSummary(rides),
    },
  };
}

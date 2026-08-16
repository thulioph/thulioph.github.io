import React from "react";
import { promises as fs } from "fs";
import path from "path";

import AppHeader from "@/components/header";
import AppNav from "@/components/navbar";
import Hero from "@/components/hero";
import CoordsCard from "@/components/coords-card";
import { splitByYear } from "@/utils/index";

const Rides = ({ ridesByYear }) => {

  return (
    <React.Fragment>
      <AppHeader>Rides</AppHeader>
      <AppNav />

      <main className="page">
        <Hero description="Bike trips">Rides</Hero>

        <section className="internal-grid">
          {ridesByYear.map(({ year, rides }) => (
            <React.Fragment key={year}>
              <h2>{year}</h2>
              <ol className="list-items-card">
                {rides.map(({ id, name, date, distance, path }) => (
                  <li key={id}>
                    <CoordsCard
                      path={path}
                      date={date}
                      distance={distance}
                    >
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
    },
  };
}

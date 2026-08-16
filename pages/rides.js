import React from "react";

import AppHeader from "@/components/header";
import AppNav from "@/components/navbar";
import Hero from "@/components/hero";
import CoordsCard from "@/components/coords-card";
import { getGpxFiles } from "@/services/index";
import { splitByYear } from "@/utils/index";

const extractCoords = (tracks) => {
  return tracks?.points?.map(({ lat, lon }) => [lat, lon]);
};

const formatFiles = (files) => {
  const rides = files
    .filter(Boolean)
    .map((file) => ({
      tracks: file.tracks[0],
      date: file.metadata.time,
    }))
    .sort((a, b) => b.date.localeCompare(a.date));

  return JSON.stringify(splitByYear(rides));
};

const Rides = ({ files }) => {
  const ridesByYear = JSON.parse(files);

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
                {rides.map(({ tracks, date }, key) => (
                  <li key={key}>
                    <CoordsCard
                      coords={extractCoords(tracks)}
                      date={date}
                      distance={tracks.distance.total}
                    >
                      {tracks.name}
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
  const files = await getGpxFiles();

  return {
    props: {
      files: formatFiles(files),
    },
  };
}

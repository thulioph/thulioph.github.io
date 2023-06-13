import React from "react";

import AppHeader from "@/components/header";
import AppNav from "@/components/navbar";
import Hero from "@/components/hero";
import CoordsCard from "@/components/coords-card";
import { getGpxFiles } from "@/services/index";

import image from "@/public/activities.jpg";

const extractCoords = (tracks) => {
  return tracks?.points?.map(({ lat, lon }) => [lat, lon]);
};

const splitByYear = (rides) => {
  const allDates = rides.map((el) => el.date);

  const onlyYears = [
    ...new Set(allDates.map((el) => new Date(el).getFullYear())),
  ];

  const abc = onlyYears.map((year) => ({
    [year]: rides.filter((ride) => new Date(ride.date).getFullYear() === year),
  }));

  return abc;
};

const formatFiles = (files) => {
  const newFiles = files
    .map((el) => ({
      tracks: el.tracks[0],
      date: el.metadata.time,
    }))
    .flat()
    .sort((a, b) => b.date.localeCompare(a.date));

  const spplitedByYears = splitByYear(newFiles);
  console.warn("spplitedByYears", spplitedByYears);

  return JSON.stringify(newFiles);
};

const Rides = ({ files }) => {
  const newFiles = JSON.parse(files);

  return (
    <React.Fragment>
      <AppHeader>Rides</AppHeader>
      <AppNav />

      <main className="page">
        <Hero
          image={image}
          description="Most of the activities here are by bike."
        >
          Rides
        </Hero>

        <section className="internal-grid">
          <ol className="list-items-card">
            {newFiles.map(({ tracks, date }, key) => (
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

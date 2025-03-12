import React from "react";

import AppHeader from "@/components/header";
import AppNav from "@/components/navbar";
import styles from "@/styles/Home.module.css";
import { getAbout } from "@/services/index";
import Player from "@/components/player";

export default function Home({ about }) {
  const { name, jobTitle, location } = about.personalInfo;
  const { currentCompany } = about.professionalInfo;

  return (
    <React.Fragment>
      <AppHeader>Home</AppHeader>
      <AppNav />

      <div className={`${styles.container} page`}>
        <main className={styles.main}>
          <section className="introduction">
            <h1>I&#39;m {name}.</h1>

            <h2>
              <span>{jobTitle}</span> from{" "}
              <a
                href={location[0].link}
                title={location[0].city}
                target="_blank"
                rel="noreferrer"
              >
                {location[0].city}
              </a>{" "}
              🇧🇷
            </h2>

            <h3>
              Currently based in{" "}
              <a
                href={location[1].link}
                target="_blank"
                rel="noreferrer"
                title={location[1].city}
              >
                <span>{location[1].city}</span>
              </a>{" "}
              🇩🇪 , working for{" "}
              <a
                href={currentCompany.website}
                title={currentCompany.label}
                target="_blank"
                rel="noreferrer"
              >
                {currentCompany.label}
              </a>
              .
            </h3>

            <Player />
          </section>
        </main>
      </div>
    </React.Fragment>
  );
}

export async function getStaticProps() {
  const about = await getAbout();

  return {
    props: {
      about,
    },
  };
}

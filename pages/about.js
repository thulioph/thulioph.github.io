import React from "react";
import Image from "next/image";

import AppNav from "@/components/navbar";
import AppHeader from "@/components/header";
import Hero from "@/components/hero";
import { getAbout } from "@/services/index";
import image from "@/public/myself.jpeg";
import styles from "@/styles/About.module.css";

const About = ({ about }) => {
  const { professionalInfo, educationInfo, socialInfo } = about;

  return (
    <React.Fragment>
      <AppHeader>About</AppHeader>
      <AppNav />

      <main className={`page ${styles.aboutPage}`}>
        <Hero image={image}>{""}</Hero>

        <section className="internal-grid professional">
          <a id="introduction" href="#introduction">
            <h2>Introduction</h2>
          </a>

          <p>{professionalInfo.bio.summary}</p>
          <p>{professionalInfo.bio.experience}</p>

          <p>My toolbox includes:</p>
          <ul className={styles.professionalList}>
            {professionalInfo.bio.toolbox.map((el) => (
              <li key={el}>{el}</li>
            ))}
          </ul>

          <p>{professionalInfo.bio.longTerm}</p>
        </section>

        <section className="internal-grid experience">
          <a id="experience" href="#experience">
            <h2>experience</h2>
          </a>

          <ul className="global-list">
            {professionalInfo.experience.map((el) => (
              <li key={el.title}>
                <a
                  href={el.website}
                  title={el.title}
                  target="_blank"
                  rel="noreferrer"
                >
                  {el.title} <span>{el.period}</span>
                </a>

                <p dangerouslySetInnerHTML={{ __html: el.description }} />

                <ul>
                  {el.achievements.map((el) => (
                    <li key={el}>{el}</li>
                  ))}
                </ul>

                {el.stack.length ? (
                  <p>Tech Stack: {el.stack.join(", ")}</p>
                ) : null}
              </li>
            ))}
          </ul>
        </section>

        <section className="internal-grid education">
          <a id="education" href="#education">
            <h2>education</h2>
          </a>

          <ul>
            {educationInfo.education.map((el) => (
              <li key={el.title}>
                <a
                  href={el.website}
                  title={el.title}
                  target="_blank"
                  rel="noreferrer"
                >
                  {el.title} - {el.field} | {el.period}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section className="internal-grid social">
          <a id="social" href="#social">
            <h2>social</h2>
          </a>

          <ul>
            {socialInfo.extraSocial.map((el) => (
              <li key={el.title}>
                <a
                  href={el.website}
                  title={el.title}
                  target="_blank"
                  rel="noreferrer"
                >
                  {el.title}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </React.Fragment>
  );
};

export default About;

export async function getStaticProps() {
  const about = await getAbout();

  return {
    props: {
      about,
    },
  };
}

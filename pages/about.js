import React from "react";
import Image from "next/image";

import AppNav from "@/components/navbar";
import AppHeader from "@/components/header";

import { getAbout } from "@/services/index";
import image from "@/public/myself.jpeg";

const About = ({ about }) => {
  const { professionalInfo, educationInfo, socialInfo } = about;

  return (
    <React.Fragment>
      <AppHeader>About</AppHeader>
      <AppNav />

      <div className="page about-page">
        <section className="personal">
          <Image src={image} priority={true} alt="Myself" layout="responsive" />
        </section>

        <section className="professional">
          <a id="introduction" href="#introduction">
            <h2>Introduction</h2>
          </a>

          <p>{professionalInfo.bio.summary}</p>
          <p>{professionalInfo.bio.experience}</p>

          <p>My toolbox includes:</p>
          <ul>
            {professionalInfo.bio.toolbox.map((el) => (
              <li key={el}>{el}</li>
            ))}
          </ul>

          <p>{professionalInfo.bio.longTerm}</p>
        </section>

        <section className="experience">
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

        <section className="education">
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

        <section className="social">
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
      </div>
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

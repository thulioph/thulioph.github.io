import React from "react";
import Image from "next/image";

import AppHeader from "@/components/header";
import Introduction from "@/components/introduction";

import { getAbout } from "@/services/index";
import image from "@/public/myself.jpeg";

const About = ({ about }) => {
  const { personalInfo, professionalInfo, educationInfo, socialInfo } = about;

  return (
    <React.Fragment>
      <AppHeader>About</AppHeader>

      <main className="page">
        <section>
          <h1>About Page!</h1>
        </section>

        <section className="personal">
          <Introduction
            name={personalInfo.name}
            jobTitle={personalInfo.jobTitle}
            headline={personalInfo.headline}
            location={personalInfo.location}
            currentCompany={professionalInfo.currentCompany}
          />

          <Image src={image} priority={true} alt="Myself" layout="responsive" />
        </section>

        <section className="professional">
          <h2>Introduction</h2>
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
          <h2>Experience</h2>

          <ul>
            {professionalInfo.experience.map((el) => (
              <li key={el.title}>
                <a href={el.website} target="_blank" title={el.title}>
                  {el.title} | {el.period}
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
          <h2>Education</h2>

          <ul>
            {educationInfo.education.map((el) => (
              <li key={el.title}>
                <a href={el.website} target="_blank" title={el.title}>
                  {el.title} - {el.field} | {el.period}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section className="social">
          <h2>Social</h2>

          <ul>
            {socialInfo.extraSocial.map((el) => (
              <li key={el.title}>
                <a href={el.website} target="_blank" title={el.title}>
                  {el.title}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section className="goals">
          <h2>Goals</h2>

          <ul>
            <li>List of goals!</li>
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

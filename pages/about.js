import React from "react";

import Image from "next/image";
import AppNav from "@/components/navbar";
import AppHeader from "@/components/header";
import { getAbout } from "@/services/index";
import styles from "@/styles/About.module.css";

import imag1 from "@/public/images/about-pic-01.jpg";
import imag2 from "@/public/images/about-pic-02.jpg";
import imag3 from "@/public/images/about-pic-03.jpg";
import imag5 from "@/public/images/about-pic-04.jpg";
import imag6 from "@/public/images/about-pic-05.jpg";
import imag7 from "@/public/images/about-pic-06.jpg";
import imag8 from "@/public/images/about-pic-07.jpg";
import imag9 from "@/public/images/about-pic-08.jpg";

const imgs = [imag2, imag8, imag3, imag6, imag7, imag5, imag1, imag9];

const orderByTitle = (arr) =>
  arr.sort((a, b) => a.title.localeCompare(b.title));

const About = ({ about }) => {
  const { professionalInfo, educationInfo, socialInfo } = about;
  const orderedSocial = orderByTitle(socialInfo.extraSocial);

  return (
    <React.Fragment>
      <AppHeader>About</AppHeader>
      <AppNav />

      <main className={`page ${styles.aboutPage}`}>
        <section className="internal-grid bio">
          <div className={styles.gridContainer}>
            <div className={styles.gridContent}>
              <h2>Bio</h2>
              <p>{professionalInfo.bio.summary}</p>
              <p>{professionalInfo.bio.experience}</p>

              <ul className={styles.professionalList}>
                {professionalInfo.bio.toolbox.map((el) => (
                  <li key={el}>{el}</li>
                ))}
              </ul>

              <p>{professionalInfo.bio.longTerm}</p>
            </div>
          </div>
        </section>

        <section className="internal-grid photos">
          {imgs.map((el, index) => (
            <div key={index} className={"images-container"}>
              <Image
                src={el.src}
                alt={el}
                width={300}
                height={300}
                priority="true"
                layout="responsive"
              />
            </div>
          ))}
        </section>

        <section className="internal-grid experience">
          <a id="experience" href="#experience">
            <h2>Career</h2>
          </a>

          <div className={styles.experienceList}>
            {professionalInfo.experience.map((el) => (
              <aside key={el.title}>
                <a
                  href={el.website}
                  title={el.title}
                  target="_blank"
                  rel="noreferrer"
                >
                  {el.title} <span>{el.period}</span>
                </a>

                <p dangerouslySetInnerHTML={{ __html: el.description }} />

                <ul className="list-default">
                  {el.achievements.map((el) => (
                    <li key={el}>{el}</li>
                  ))}
                </ul>

                {el.stack.length ? (
                  <p className={styles.experienceTechStach}>
                    Tech Stack:{" "}
                    {el.stack.map((el) => (
                      <span key={el}>{el}</span>
                    ))}
                  </p>
                ) : null}
              </aside>
            ))}
          </div>
        </section>

        <section className="internal-grid education">
          <a id="education" href="#education">
            <h2>education</h2>
          </a>

          <ul className="list-default">
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

          <ul className="list-default">
            {orderedSocial.map((el) => (
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

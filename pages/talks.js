import React from "react";

import AppHeader from "@/components/header";
import AppNav from "@/components/navbar";
import Hero from "@/components/hero";
import { getTalks } from "@/services/index";
import image from "@/public/talks.jpg";

const Talks = ({ talks }) => {
  return (
    <React.Fragment>
      <AppHeader>Talks</AppHeader>
      <AppNav />

      <main className="page">
        <Hero
          image={image}
          description={"When you share your knowledge, you learn twice."}
        >
          Talks
        </Hero>

        <section className="internal-grid">
          <ul className="list-items">
            {talks.map((el) => (
              <li key={el.title}>
                <a
                  href={el.link}
                  target="_blank"
                  rel="noreferrer"
                  title={el.title}
                >
                  {el.title}
                  <p>{el.description}</p>
                  <span>{el.language}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </React.Fragment>
  );
};

export default Talks;

export async function getStaticProps() {
  const { talks } = await getTalks();

  const sortedByDate = talks.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);

    return dateB - dateA;
  });

  return {
    props: {
      talks: sortedByDate,
    },
  };
}

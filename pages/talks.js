import React from "react";

import AppHeader from "@/components/header";
import AppNav from "@/components/navbar";
import Hero from "@/components/hero";
import { getTalks } from "@/services/index";
import { splitByYear } from "@/utils/index";

const formatTalks = (talks) => {
  const talksByYear = splitByYear(talks, "talks");
  return talksByYear;
};

const Talks = ({ talks: newTalks }) => {
  return (
    <React.Fragment>
      <AppHeader>Talks</AppHeader>
      <AppNav />

      <main className="page">
        <Hero description={"When you share your knowledge, you learn twice."}>
          Talks
        </Hero>

        <section className="internal-grid">
          {newTalks.map(({ year, talks }) => (
            <React.Fragment key={year}>
              <h2>{year}</h2>
              <ol className="posts-list">
                {talks.map((el) => (
                  <li key={el.title}>
                    <a
                      title={el.title}
                      href={el.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <p>{el.title}</p>
                      <span>{el.date}</span>
                    </a>
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

export default Talks;

export async function getStaticProps() {
  const { talks } = await getTalks();

  const sortedByDate = talks.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);

    return dateB - dateA;
  });

  const newDates = sortedByDate.map((el) => ({
    ...el,
    date: new Date(el.date).toDateString(),
  }));

  return {
    props: {
      talks: formatTalks(newDates),
    },
  };
}

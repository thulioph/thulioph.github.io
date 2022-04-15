import React from "react";

import AppHeader from "@/components/header";
import { getTalks } from "@/services/index";

const Talks = ({ talks }) => {
  return (
    <React.Fragment>
      <AppHeader>Talks</AppHeader>

      <main className="page">
        <h1>Talks Page!</h1>

        <section>
          <ul>
            {talks.map((el) => (
              <li key={el.title}>
                <a href={el.link} target="_blank" title={el.title}>
                  {el.title} | <span>{el.date}</span>
                  <p>{el.description}</p>
                  <span>{el.language}</span>
                </a>

                <br />
                <br />
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

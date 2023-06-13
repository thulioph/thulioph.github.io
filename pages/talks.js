import React from "react";

import AppHeader from "@/components/header";
import AppNav from "@/components/navbar";
import Hero from "@/components/hero";
import PostCard from "@/components/post-card";
import { getTalks } from "@/services/index";
import image from "@/public/talks.jpg";
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
        <Hero
          image={image}
          description={"When you share your knowledge, you learn twice."}
        >
          Talks
        </Hero>

        <section className="internal-grid">
          {newTalks.map(({ year, talks }) => (
            <React.Fragment key={year}>
              <h2>{year}</h2>
              <ol className="list-items-card">
                {talks.map((el) => (
                  <li key={el.title}>
                    <PostCard date={el.date} link={el.link}>
                      {el.title}
                    </PostCard>
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

  return {
    props: {
      talks: formatTalks(sortedByDate),
    },
  };
}

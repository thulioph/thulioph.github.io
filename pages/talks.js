import React from "react";
import Image from "next/image";

import AppHeader from "@/components/header";
import AppNav from "@/components/navbar";
import { getTalks } from "@/services/index";
import image from "@/public/talks.jpg";

const Talks = ({ talks }) => {
  return (
    <React.Fragment>
      <AppHeader>Talks</AppHeader>
      <AppNav />

      <main className="page">
        <section className="hero">
          <aside className="hero-image">
            <Image
              src={image}
              priority={true}
              alt="Talks"
              layout="responsive"
            />
          </aside>

          <aside className="hero-text">
            <h1>Talks</h1>
            <p>
              I believe when you share your knowledge you are learning twice.
            </p>
          </aside>
        </section>

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

import React from "react";
import Image from "next/image";

import AppHeader from "@/components/header";
import AppNav from "@/components/navbar";
import { getProjects } from "@/services/index";
import image from "@/public/projects.jpg";

const Projects = ({ projects }) => {
  return (
    <React.Fragment>
      <AppHeader>Projects</AppHeader>
      <AppNav />

      <main className="page">
        <section className="hero">
          <aside className="hero-image">
            <Image
              src={image}
              priority={true}
              alt="Projects"
              layout="responsive"
            />
          </aside>

          <aside className="hero-text">
            <h1>Work, Hobby and Open-Source.</h1>
            <p>
              Sometimes I like to code something from my mind as a hobby or to
              help the open-source community.
            </p>
          </aside>
        </section>

        <section className="internal-grid">
          <ul className="list-items">
            {projects.map((el) => (
              <li key={el.id}>
                <a
                  href={el.html_url}
                  target="_blank"
                  rel="noreferrer"
                  title={el.name}
                >
                  <span>{el.name}</span>
                  <p>{el.description}</p>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </React.Fragment>
  );
};

export default Projects;

export async function getStaticProps() {
  const projects = await getProjects();
  const filteredProjects = projects.filter(({ fork }) => fork === false);

  return {
    props: {
      projects: filteredProjects,
    },
  };
}

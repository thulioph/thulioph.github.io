import React from "react";

import AppHeader from "@/components/header";
import AppNav from "@/components/navbar";
import Hero from "@/components/hero";
import { getProjects } from "@/services/index";
import image from "@/public/projects.jpg";

const Projects = ({ projects }) => {
  return (
    <React.Fragment>
      <AppHeader>Projects</AppHeader>
      <AppNav />

      <main className="page">
        <Hero image={image} description={"Work, Hobby and Open-Source."}>
          Projects
        </Hero>

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

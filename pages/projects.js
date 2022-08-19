import React from "react";

import AppHeader from "@/components/header";
import AppNav from "@/components/navbar";
import { getProjects } from "@/services/index";

const Projects = ({ projects }) => {
  return (
    <React.Fragment>
      <AppHeader>Projects</AppHeader>
      <AppNav />

      <main className="page about-page projects-page">
        <section>
          <h1>Work, Hobby and Open-Source.</h1>
          <p>
            Sometimes I like to code something from my mind as a hobby or to
            help the open-source community.
          </p>
        </section>

        <section>
          <ul>
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

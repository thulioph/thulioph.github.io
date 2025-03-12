import React from "react";

import AppHeader from "@/components/header";
import AppNav from "@/components/navbar";
import Hero from "@/components/hero";
import { getProjects } from "@/services/index";
import { splitByYear } from "@/utils/index";

const Projects = ({ projects }) => {
  const sortedProjects = projects.sort((a, b) =>
    b.created_at.localeCompare(a.created_at)
  );

  const formatProjectsByYear = (projects) => {
    const projectsByYear = splitByYear(projects, "projects");
    return projectsByYear;
  };

  return (
    <React.Fragment>
      <AppHeader>Projects</AppHeader>
      <AppNav />

      <main className="page">
        <Hero description={"Work, Hobby and Open-Source."}>Projects</Hero>

        <section className="internal-grid">
          {formatProjectsByYear(sortedProjects).map(({ year, projects }) => (
            <React.Fragment key={year}>
              <h2>{year}</h2>
              <ol className="posts-list">
                {projects.map((el) => (
                  <li key={el.id}>
                    <a
                      title={el.description}
                      href={el.html_url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <p>{el.name}</p>
                      <span>{new Date(el.created_at).toDateString()}</span>
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

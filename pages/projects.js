import React from "react";

import AppHeader from "@/components/header";
import { getProjects } from "@/services/index";

const Projects = ({ projects }) => {
  return (
    <React.Fragment>
      <AppHeader>Projects</AppHeader>

      <main className="page">
        <h1>Projects Page!</h1>

        <ul>
          {projects.sort().map((el) => (
            <li key={el.id}>
              <a href={el.html_url} target="_blank" title={el.name}>
                <span>{el.name}</span>
                <p>{el.description}</p>
              </a>
            </li>
          ))}
        </ul>

        <section>
          {/* change this content */}
          <h4>
            “My ability to compromise and maintain a positive attitude along
            with a true passion in providing the best results on my work - has
            allowed me to complete projects successfully.”
          </h4>
        </section>
      </main>
    </React.Fragment>
  );
};

export default Projects;

export async function getStaticProps() {
  const projects = await getProjects();

  return {
    props: {
      projects,
    },
  };
}

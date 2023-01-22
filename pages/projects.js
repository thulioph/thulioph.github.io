import React from "react";

import AppHeader from "@/components/header";
import AppNav from "@/components/navbar";
import Hero from "@/components/hero";
import PostCard from "@/components/post-card";
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
          <ul className="list-items-card">
            {projects.map((el) => (
              <li key={el.id}>
                <PostCard
                  date={new Date(el.updated_at).toDateString()}
                  link={el.html_url}
                >
                  {el.name}
                </PostCard>
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

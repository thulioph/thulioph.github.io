import React, { useState, useEffect } from "react"

import SEO from '../components/seo'
import { Project } from '../components/projects'
import SectionIntro from '../components/sectionIntro'

import { getUserRepos } from '../hooks/use-projects'

import Layout from "../templates/page"

const Projects = () => {
	const [projects, setProjects] = useState([])

	useEffect(() => {
		async function getRepos() {
			const data = await getUserRepos('thulioph')
			setProjects(data)
		}

		if (!projects || !projects.length) {
			getRepos()
		}
	}, [projects, setProjects])

  return (
    <React.Fragment>
      <Layout>
        <SEO title="Projects" />

        <SectionIntro
          title="Projects"
          description={`I like to practice and study using open source projects.`}
        />

        <section className="page-container">
          <ul className="projects-list">
            {projects.slice(0, 20).map((project) => (
              <Project
                key={project.id}
                title={project.name}
                href={project.html_url}
                language={project.language}
                description={project.description}
              />
            ))}
          </ul>
        </section>
      </Layout>
    </React.Fragment>
  )
}

export default Projects

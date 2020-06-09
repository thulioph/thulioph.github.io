import React from 'react'

import withGrid from './withGrid'
import Loading from './loading'
import { useProjects } from '../hooks/use-projects'

const Projects = () => {
  const { projects } = useProjects()

  return (
    <React.Fragment>
      <Loading when={!projects || !projects.length}>
        {projects && projects.map(
          ({ id, title, description, link, mainImage, techStack }) => (
            <aside className="project-item" key={id}>
              <h5 className="project-title">{title}</h5>
              <a
                href={link}
                title={title}
                rel="noopener noreferrer"
                target="_blank"
              >
                view site
              </a>

              <figure>
                <img src={mainImage} alt={title} />
              </figure>

              <div className="stack-list">
                <ul>
                  {techStack.map((tech, idx) => (
                    <li key={idx}>
                      <img
                        src={`https://picsum.photos/42/${tech}`}
                        alt={tech}
                      />
                    </li>
                  ))}
                </ul>

                <p>{description}</p>
              </div>
            </aside>
          )
        )}
      </Loading>
    </React.Fragment>
  )
}

export default withGrid(Projects, {
  id: 'projects',
  title: 'Projects',
  seeAll: 'https://github.com/thulioph'
})
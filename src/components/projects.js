import React, { useState, useEffect } from 'react'

import withGrid from './withGrid'
import Loading from './loading'
import Link from './link'

import { getUserRepos } from '../hooks/use-projects'
import { formatDate } from '../formatters'

const Projects = () => {
  const [projects, setProjects] = useState([])

	useEffect(() => {
		async function getRepos() {
			const data = await getUserRepos('thulioph')
			setProjects(data.slice(0, 3))
		}

		if (!projects || !projects.length) {
			getRepos()
		}
	}, [projects, setProjects])

  return (
    <React.Fragment>
      <Loading when={!projects || !projects.length}>
        <ul className="writings-list">
          {projects && projects.map(({ id, html_url, name, updated_at }) => (
            <Link key={id} href={html_url} title={name} pubDate={formatDate(updated_at)} target="_blank" />
          ))}
        </ul>
      </Loading>
    </React.Fragment>
  )
}

export default withGrid(Projects, {
  id: 'projects',
  title: 'Projects',
  seeAll: 'projects'
})

export const Project = (props) => {
  const { href, title, language, description } = props

  return (
    <React.Fragment>
      <li>
        <a href={href} title={title} rel="noopener noreferrer" target="_blank">
          <h3>
            {title} {language && <span className="post-lang">{language}</span>}
          </h3>
          <p>{description}</p>
        </a>
      </li>
    </React.Fragment>
  )
}

/**
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 * Template for start a new hook
 */

import { useStaticQuery, graphql } from "gatsby"

import { reorderRepos, filterRepos } from '../formatters'

export const useProjects = () => {
  const data = useStaticQuery(
    graphql`
      query {
        myDataNodes {
          projects {
            id
            title
            description
            link
            mainImage
            techStack
          }
        }
      }
    `
  )

  return data.myDataNodes
}

export const getUserRepos = async (user) => {
	let response = await fetch(
		`https://api.github.com/users/${user}/repos?per_page=100`
	)

	let data = await response.json()

	const allRepos = reorderRepos(data)
	const filteredRepos = filterRepos(allRepos)

	return filteredRepos
}
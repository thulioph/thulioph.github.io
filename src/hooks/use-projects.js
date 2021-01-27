/**
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 * Template for start a new hook
 */

import { useStaticQuery, graphql } from "gatsby"

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
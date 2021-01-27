/**
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 * Template for start a new hook
 */

import { useStaticQuery, graphql } from "gatsby"

export const useWritings = () => {
  const data = useStaticQuery(
    graphql`
      query {
        myDataNodes {
          writings {
            id
            link
            pubDate
            title
          }
        }
      }
    `
  )

  return data.myDataNodes
}
/**
 * See: https://www.gatsbyjs.org/docs/use-static-query/
*/

import { useStaticQuery, graphql } from "gatsby"

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            title
            description
            image
            twitter
            github
            linkedin
            extraSocial {
              openProcessing
              stackOverflow
              soundCloud
              unsplash
              wakatime
              lastFm
              genius
              goodReads
              strava
              codepen
              codeSandBox
              medium
            }
          }
        }
      }
    `
  )

  return site.siteMetadata
}

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
            name
            jobTitle
            location {
              city
              country
              link
            }
            headline
            currentCompany {
              label
              website
            }
            title
            description
            image
            twitter
            github
            linkedin
            extraSocial {
              linkedin
              github
              twitter
              stackOverflow
              codepen
              codeSandBox
              medium
              lastFm
              unsplash
              wakatime
            }
            bio {
              summary
              experience
              toolbox
              longTerm
            }
            experience {
              title
              period
              website
            }
            education {
              title
              period
              field
              website
            }
          }
        }
      }
    `
  )

  return site.siteMetadata
}

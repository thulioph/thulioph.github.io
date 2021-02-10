import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import withGrid from './withGrid'

const Hero = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            jobTitle
            author
            currentCompany {
              label
              website
            }
          }
        }
      }
    `
  )

  return (
    <React.Fragment>
      <h2>
        Hi, I'm {``}

        <div className="crossed">
          <span>Thulio Philipe</span>, a.k.a
        </div> {``}

        <span>{site.siteMetadata.author}</span>.
      </h2>

      <h4>
        {site.siteMetadata.jobTitle} at {``}

        <span>
          <a
            href={site.siteMetadata.currentCompany.website}
            rel="noopener noreferrer"
            target="_blank"
          >
            {site.siteMetadata.currentCompany.label}
          </a>
        </span>
      </h4>
    </React.Fragment>
  )
}

export default withGrid(Hero, {
  id: 'hero'
})
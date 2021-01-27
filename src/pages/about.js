import React from "react"

import SEO from "../components/seo"
import SectionIntro from '../components/sectionIntro'
import { getExtraSocialIcon } from '../components/getTechIcon'

import Layout from '../templates/page'
import { useSiteMetadata } from '../hooks/use-site-metadata'

const About = () => {
  const { image, title, description, extraSocial } = useSiteMetadata()

  return (
    <React.Fragment>
      <Layout>
        <SEO title="About" />

        <SectionIntro title="About" description="Who am I? And who are you?" />

        <section className="page-container">
          <figure>
            <img src={image} alt={title} />
          </figure>

          <p
            className="description-text"
            dangerouslySetInnerHTML={{ __html: description }}
          />

          <ul className="extra-social">
            {Object.keys(extraSocial).map(k => (
              <li key={k}>
                <a
                  href={extraSocial[k]}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="icon" src={getExtraSocialIcon(k)} alt={k} />
                  <p>{k}</p>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </Layout>
    </React.Fragment>
  )
}

export default About


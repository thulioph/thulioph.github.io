import React from "react"

import SEO from "../components/seo"
import { getExtraSocialIcon } from '../components/getTechIcon'

import Layout from '../templates/page'
import { useSiteMetadata } from '../hooks/use-site-metadata'

import image from '../images/about/myself.jpg'
import { Presentation, Box, TitleSection, Paragraph  } from '../components/shared'

const About = () => {
  const { title, bio, extraSocial, name, jobTitle, location, currentCompany, headline, experience, education } = useSiteMetadata()

  return (
    <React.Fragment>
      <Layout>
        <SEO title="About" />

        <section className="page-container">
          <Presentation>
            I'm {name}, {jobTitle}, based in <a href={location.link} rel="noopener noreferrer" target="_blank">{location.city}, {location.country}</a>.
            Currently, working at <a rel="noopener noreferrer" target="_blank" href={currentCompany.website}>{currentCompany.label}</a>,  {headline}.
          </Presentation>

          <figure>
            <img src={image} alt={title} />
          </figure>

          <Box>
            <TitleSection>Introduction</TitleSection>

            <Paragraph>{bio.summary}</Paragraph>
            <br /><br />

            <Paragraph>{bio.experience}</Paragraph>
            <br /><br />

            <Paragraph>My toolbox includes:</Paragraph>
            <ul className="description-list">
              {bio.toolbox.map(el => (
                <li key={el}>
                  <Paragraph>{el}</Paragraph>
                </li>
              ))}
            </ul>
            <br /><br />

            <Paragraph>{bio.longTerm}</Paragraph>
          </Box>

          <Box>
            <TitleSection>Experience</TitleSection>

            <ul className="about-list">
              {experience.map((el) => (
                <li key={el.title}>
                  <a href={el.website} title={el.title} rel="noopener noreferrer" target={"_blank"}>
                    <p>{el.title}</p>
                    <span>{el.period}</span>
                  </a>
                </li>
              ))}
            </ul>
          </Box>

          <Box>
            <TitleSection>Education</TitleSection>

            <ul className="about-list">
              {education.map((el) => (
                <li key={el.title}>
                  <a href={el.website} title={el.title} rel="noopener noreferrer" target={"_blank"}>
                    <p>{el.title} <span className="post-lang">{el.field}</span></p>
                    <span>{el.period}</span>
                  </a>
                </li>
              ))}
            </ul>
          </Box>

          <Box>
            <TitleSection>Social</TitleSection>

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
          </Box>
        </section>
      </Layout>
    </React.Fragment>
  )
}

export default About


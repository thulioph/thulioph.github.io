import React from "react"

import Layout from '../templates/page'
import { useSiteMetadata } from '../hooks/use-site-metadata'

import SEO from "../components/seo"
import { Presentation, Box, TitleSection, Paragraph, ProfileImage  } from '../components/shared'
import ListBlockLink from "../components/ListBlockLink"
import SocialMediaLink from "../components/SocialMediaLink"

import image from '../images/about/myself.jpg'

const About = () => {
  const {
    title,
    bio,
    extraSocial,
    name,
    jobTitle,
    location,
    currentCompany,
    headline,
    experience,
    education
  } = useSiteMetadata()

  return (
    <React.Fragment>
      <Layout>
        <SEO title="About" />

        <section className="page-container">
          <Presentation>
            I'm {name}, {jobTitle}, based in <a href={location.link} rel="noopener noreferrer" target="_blank">{location.city}, {location.country}</a>.
            Currently, working at <a rel="noopener noreferrer" target="_blank" href={currentCompany.website}>{currentCompany.label}</a>,  {headline}.
          </Presentation>

          <ProfileImage>
            <img src={image} alt={title} />
          </ProfileImage>

          {/* Introduction */}
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

          {/* Experience */}
          <Box>
            <TitleSection>Experience</TitleSection>

            <ul className="about-list">
              {experience.map(({ title, website, period }) => (
                <ListBlockLink key={title} title={title} link={website} period={period} />
              ))}
            </ul>
          </Box>

          {/* Education */}
          <Box>
            <TitleSection>Education</TitleSection>

            <ul className="about-list">
              {education.map(({ title, website, field, period }) => (
                <ListBlockLink key={title} title={title} link={website} period={period} field={field} />
              ))}
            </ul>
          </Box>

          {/* Social */}
          <Box>
            <TitleSection>Social</TitleSection>

            <ul className="extra-social">
              {Object.keys(extraSocial).map(k => (
                <SocialMediaLink key={k} link={extraSocial[k]} title={k} />
              ))}
            </ul>
          </Box>
        </section>
      </Layout>
    </React.Fragment>
  )
}

export default About


import React from "react"

import SEO from "../components/seo"
import { getExtraSocialIcon } from '../components/getTechIcon'

import Layout from '../templates/page'
import { useSiteMetadata } from '../hooks/use-site-metadata'

import image from '../images/about/myself.jpg'

const About = () => {
  const { title, bio, extraSocial, name, jobTitle, location, currentCompany, headline, experience, education } = useSiteMetadata()

  return (
    <React.Fragment>
      <Layout>
        <SEO title="About" />

        <section className="page-container">
          <h1 className="presentation">
            I'm {name}, {jobTitle}, based in <a href={location.link} rel="noopener noreferrer" target="_blank">{location.city}, {location.country}</a>.
            Currently, working at <a rel="noopener noreferrer" target="_blank" href={currentCompany.website}>{currentCompany.label}</a>,  {headline}.
          </h1>

          <figure>
            <img src={image} alt={title} />
          </figure>

          <div className="box">
            <h2 className="topic">Introduction</h2>

            <p className="text">{bio.summary}</p>
            <br />
            <br />

            <p className="text">{bio.experience}</p>
            <br />
            <br />

            <p className="text">My toolbox includes:</p>
            <ul className="description-list">
              {bio.toolbox.map(el => (
                <li key={el}>
                  <p className="text">{el}</p>
                </li>
              ))}
            </ul>
            <br />
            <br />

            <p className="text">{bio.longTerm}</p>
          </div>

          <div className="box">
            <h2 className="topic">Experience</h2>

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
          </div>

          <div className="box">
            <h2 className="topic">Education</h2>

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
          </div>

          <div className="box">
            <h2 className="topic">Social</h2>

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
          </div>
        </section>
      </Layout>
    </React.Fragment>
  )
}

export default About


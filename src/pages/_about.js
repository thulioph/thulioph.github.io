import React from "react"

import SEO from "../components/seo"
import Layout from '../templates/page'

const About = () => (
  <React.Fragment>
    <Layout>
      <SEO title="About" />

      <h1>Hi from about page</h1>
      <p>Welcome to page 2</p>
    </Layout>
  </React.Fragment>
)

export default About


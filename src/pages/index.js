import React from "react"

import Layout from "../templates/page"

import Hero from '../components/hero'
import About from '../components/about'
import Talks from "../components/talks"
import Projects from "../components/projects"
import Writings from "../components/writings"

const IndexPage = () => {

  return (
    <Layout>
      <Hero />
      <About />
      <Talks />
      <Projects />
      <Writings />
    </Layout>
  )
}

export default IndexPage

import React from "react"
import { graphql } from "gatsby"

import Layout from "../templates/page"

import Hero from '../components/hero'
import About from '../components/about'
import Talks from "../components/talks"
import Projects from "../components/projects"
import Writings from "../components/writings"

const IndexPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges.map(
    ({ node }) => node.frontmatter
  )

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

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`
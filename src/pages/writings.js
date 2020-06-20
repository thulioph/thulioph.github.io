import React from "react"
import { graphql } from "gatsby"

import SEO from '../components/seo'
import Link from '../components/link'
import SectionIntro from '../components/sectionIntro'

import Layout from "../templates/page"

const Writings = ({ data }) => {
  const posts = data.allMarkdownRemark.edges.filter(post => post.node.frontmatter.title.length > 0)

  return (
    <React.Fragment>
      <Layout>
        <SEO title="Writings" />

        <SectionIntro
          title="Writings"
          description={`until now are ${posts.length} posts and counting.`}
        />

        <ul className="writings-list">
          {posts.map(({ node: post }) => (
            <Link
              key={post.id}
              title={post.frontmatter.title}
              pubDate={post.frontmatter.date}
              href={post.frontmatter.path}
              target="_self"
            />
          ))}
        </ul>
      </Layout>
    </React.Fragment>
  )
}

export default Writings

export const pageQuery = graphql`
  query WritingsQuery {
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

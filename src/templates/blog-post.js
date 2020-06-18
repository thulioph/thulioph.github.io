import React from 'react'
import { graphql } from 'gatsby'

import Layout from './page'
import SEO from "../components/seo"
import Image from '../components/image'

const Template = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <React.Fragment>
      <Layout>
        <section className="blog-post-container">
          <SEO title={`Your Blog Name - ${post.frontmatter.title}`} />

          <div className="blog-post">
            <Image
              alt={post.frontmatter.caption}
              filename={post.frontmatter.imageSlug}
            />

            <h1>{post.frontmatter.title}</h1>

            <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
          </div>
        </section>
      </Layout>
    </React.Fragment>
  )
}

export default Template

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
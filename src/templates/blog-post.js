import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from './page'
import SEO from "../components/seo"
import Image from '../components/image'

const Template = ({ data, pageContext }) => {
  const { markdownRemark: post } = data
  const { next, prev } = pageContext

  const { date, imageSlug, title, caption } = post.frontmatter

  const readingTime = post.fields.readingTime.text
  const hasImage = post.frontmatter.imageSlug

  return (
    <React.Fragment>
      <Layout>
        <section className="blog-post-container">
          <SEO title={`Writings - ${title}`} />

          <div className="blog-post">
            {hasImage && (
              <Image
                alt={caption}
                filename={imageSlug}
              />)
            }

            <section className="blog-post-header">
              <h5>{date} | {readingTime}</h5>
              <h1>{title}</h1>
            </section>

            <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />

            {/* previous & next articles */}
            <div className="blog-post-content">
              <h2>Read More</h2>

              <section className="blog-post-actions">
                {prev &&
                  <Link className="actions-link" to={prev.frontmatter.path}>
                    <span className="label">Previous</span>
                    <p className="title">{prev.frontmatter.title}</p>
                  </Link>
                }

                {next &&
                  <Link className="actions-link" to={next.frontmatter.path}>
                    <span className="label">Next</span>
                    <p className="title">{next.frontmatter.title}</p>
                  </Link>
                }
              </section>
            </div>
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
        imageSlug
      }
      fields {
        readingTime {
          text
        }
      }
    }
  }
`
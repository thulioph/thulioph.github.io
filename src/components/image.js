import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const mapImage = (images, filename) => {
  return images.edges.find(({ node }) => {
    return node.relativePath.includes(filename)
  })
}

const Image = props => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid(maxWidth: 1200) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const image = mapImage(data.images, props.filename)

      if (!image) return null

      return <Img alt={props.alt} fluid={image.node.childImageSharp.fluid} />
    }}
  />
)

export default Image

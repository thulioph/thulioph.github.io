import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import withGrid from './withGrid'
import Loading from './loading'
import Link from './link'
import { formatWritings } from '../formatters'

const Writings = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] },
          limit: 3
        ) {
          edges {
            node {
              excerpt(pruneLength: 250)
              id
              frontmatter {
                title
                date(formatString: "ll")
                path
                lang
              }
            }
          }
        }
      }
    `
  )

  const writings = formatWritings(data.allMarkdownRemark.edges)

  return (
    <React.Fragment>
      <Loading when={!writings || !writings.length}>
        <ul className="writings-list">
          {writings && writings.map(({ id, link, title, pubDate }) => (
            <Link key={id} href={link} title={title} pubDate={pubDate} />
          ))}
        </ul>
      </Loading>
    </React.Fragment>
  )
}

export default withGrid(Writings, {
  id: 'writings',
  title: 'Writings',
  seeAll: 'writings'
})
/**
 * See: https://www.gatsbyjs.org/docs/node-apis/
**/

const path = require('path')

const getTalksData = () => {
  const talks = [
    {
      id: "1",
      title: "css na era dos componentes",
      pubDate: "Dec 19, 2012",
      link: "https://speakerdeck.com/thulioph/css-na-era-dos-componentes",
    },
    {
      id: "2",
      title: "recompose",
      pubDate: "Dec 1, 2018",
      link: "https://speakerdeck.com/thulioph/recompose",
    },
    {
      id: "3",
      title: "styled components",
      pubDate: "Aug 2, 2017",
      link: "https://speakerdeck.com/thulioph/styled-components",
    },
  ]

  return talks
}

const getWritingsData = () => {
  const writings = [
    {
      id: "1",
      title: "recompose",
      pubDate: "Mar 19, 2019",
      link: "https://speakerdeck.com/thulioph/recompose",
    },
    {
      id: "2",
      title: "components with vue.js",
      pubDate: "Sep 20, 2018",
      link: "https://speakerdeck.com/thulioph/recompose",
    },
    {
      id: "3",
      title: "web security 101",
      pubDate: "Aug 3, 2017",
      link: "https://speakerdeck.com/thulioph/recompose",
    },
  ]

  return writings
}

const getProjects = () => {
  const projects = [
    {
      id: "1",
      title: "Twitter Realtime",
      description: "Project description and additional information",
      link: "https://github.com/thulioph/twitter-realtime",
      mainImage: "https://picsum.photos/800/500",
      techStack: ["react", "nodejs", "typescript"],
    },
    {
      id: "2",
      title: "Twitter Realtime",
      description: "Project description and additional information",
      link: "https://github.com/thulioph/twitter-realtime",
      mainImage: "https://picsum.photos/800/500",
      techStack: ["react", "nodejs", "typescript"],
    },
    {
      id: "3",
      title: "Twitter Realtime",
      description: "Project description and additional information",
      link: "https://github.com/thulioph/twitter-realtime",
      mainImage: "https://picsum.photos/800/500",
      techStack: ["react", "nodejs", "typescript"],
    },
  ]

  return projects
}

exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  const { createNode } = actions

  const myData = {
    talks: getTalksData(),
    writings: getWritingsData(),
    projects: getProjects()
  }

  const nodeMeta = {
    id: createNodeId(`my-data-${myData.key}`),
    parent: null,
    children: [],
    internal: {
      type: `MyDataNodes`,
      mediaType: `text/html`,
      content: JSON.stringify(myData),
      contentDigest: createContentDigest(myData),
    }
  }

  const node = Object.assign({}, myData, nodeMeta)
  return createNode(node)
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)

  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: blogPostTemplate,
      context: {}, // additional data can be passed via context
    })
  })
}
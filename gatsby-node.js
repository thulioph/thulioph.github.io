/**
 * See: https://www.gatsbyjs.org/docs/node-apis/
**/

const path = require('path')

const getTalksData = () => {
  const talks = [
    {
      id: "1",
      title: "css na era dos componentes",
      pubDate: "Dec 19, 2019",
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
      pubDate: "Aug 2, 2018",
      link: "https://speakerdeck.com/thulioph/styled-components",
    },
  ]

  return talks
}

const getWritingsData = () => {
  const writings = [
    {
      id: "1",
      title: "agile front-end techniques",
      pubDate: "Oct 16, 2019",
      link: "https://labcodes.com.br/blog/pt/articles/3-tecnicas-fundamentais-da-metodologia-agil-no-front-end.html",
    },
    {
      id: "2",
      title: "recompose",
      pubDate: "Mar 19, 2019",
      link: "https://labcodes.com.br/blog/articles/functional-components-with-recompose.html",
    },
    {
      id: "3",
      title: "web security 101",
      pubDate: "Aug 3, 2017",
      link: "https://labcodes.com.br/blog/pt/articles/seguranca-de-aplicacoes-web-101.html",
    },
  ]

  return writings
}

const getProjects = () => {
  const projects = [
    {
      id: "1",
      title: "Twitter Realtime",
      description: "Display tweets location in realtime",
      link: "https://twitter-realtime.herokuapp.com/",
      mainImage:
        "https://raw.githubusercontent.com/thulioph/twitter-realtime/master/example.png",
      techStack: ["angularjs", "nodejs", "css"]
    },
    {
      id: "2",
      title: "WhoSampled Scrapper",
      description: "Samples information from an specific artist",
      link: "https://github.com/thulioph/whosampled-scraper",
      mainImage:
        "https://raw.githubusercontent.com/thulioph/whosampled-scraper/master/demo.gif",
      techStack: ["nodejs", "typescript"]
    },
    {
      id: "3",
      title: "Greensock",
      description: "Icon animations using GreenSock",
      link: "https://greensock.netlify.com/",
      mainImage:
        "https://raw.githubusercontent.com/thulioph/greensock/master/demo.gif",
      techStack: ["html", "css", "javascript"]
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
              title
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

  const posts = result.data.allMarkdownRemark.edges

  posts.forEach(({ node }, index) => {
    const path = node.frontmatter.path

    createPage({
      path,
      component: blogPostTemplate,
      context: { // additional data can be passed via context
        pathSlug: path,
        prev: index === 0 ? null : posts[index - 1].node,
        next: index === (posts.length - 1) ? null : posts[index + 1].node,
      },
    })
  })
}
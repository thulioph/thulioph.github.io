module.exports = {
  siteMetadata: {
    title: "Thulio Philipe (thulioph)",
    description: `I'm a Web Developer for more than eight years. I already worked with ad agencies, startups,software studios and also as a consultant, always focused on the Front-End side (UI). My current focus is on WebApps and some topics that guide my studies are Performance, Security, User Engagement and Code Quality I like to share my knowledge through talks [1], articles [2] and all repositories on my Github [3] are open. My current focus is on WebApps and some topics that guide my studies are Performance, Security, User Engagement and Code Quality.`,
    image:
      "https://avatars2.githubusercontent.com/u/2343288?s=460&u=34b95449c5414b41560dd5b41c97cf414bad8c8c&v=4",
    author: "thulioph",
    twitter: `@thulioph_`,
    github: `thulioph`,
    linkedin: `thulioph`,
  },
  plugins: [
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/posts`,
        name: `posts`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [],
      },
    },
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        google: {
          families: ["Roboto:300,400,700", "Annie Use Your Telescope"],
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-69489589-1",
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

const config = require('./config/config')

module.exports = {
  siteMetadata: {
    ...config
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sitemap',
    'gatsby-transformer-remark',
    'gatsby-plugin-robots-txt',
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: "Merriweather",
            variants: ["400", "700", "900", "700i", "900i"]
          },
          {
            family: "Playfair Display",
            variants: ["700", "700i"]
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.title,
        short_name: config.shortName,
        description: config.description,
        start_url: "/",
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: "standalone",
        icon: `src/assets/JR-logo.png`
      }
    },
    // {
    //   resolve: `gatsby-source-contentful`,
    //   options: {
    //     spaceId: process.env.SPACE_ID,
    //     accessToken: process.env.TOKEN
    //   }
    // },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: config.themeColor,
        showSpinner: false
      }
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-netlify-cache',
    'gatsby-plugin-netlify'
  ]
}

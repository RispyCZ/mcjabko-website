/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `https://cms.mcjabko.cz`,
        queryLimit: 1000, // Defaults to 100
        collectionTypes: [`pages`, `admins`, `servers`, 'faq'],
      },
    },
  ],
  siteMetadata: {
    title: 'MCJabko.cz',
    description: 'MCJabko je síť Semi-Vanilla a Vanilla serverů již od roku 2017.'
  }
}

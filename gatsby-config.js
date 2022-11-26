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
  plugins: [],
  siteMetadata: {
    title: 'MCJabko.cz',
    description: 'MCJabko je síť Semi-Vanilla a Vanilla serverů již od roku 2017.'
  }
}

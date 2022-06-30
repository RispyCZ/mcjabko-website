const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allStrapiPages {
        nodes {
          Content
          Header
          Subtitle
          Slug
        }
      }
    }
  `)
  const templatePath = path.resolve(`src/components/Page.js`)
  
  result.data.allStrapiPages.nodes.forEach((node) => {
    createPage({
      path: node.Slug,
      component: templatePath,
      context: {
        slug: node.Slug,
        page: node
      },
    })
  })
}
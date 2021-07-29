const path = require('path');


exports.createPages = async ({graphql, actions}) => {
  const { data } = await graphql(`
  query Posts {
    allMarkdownRemark {
      nodes {
        frontmatter {
          slug
          route
        }
      }
    }
  }
  `)

  data.allMarkdownRemark.nodes.forEach(node => {
    actions.createPage({
      path: `${node.frontmatter.route}/blog/${node.frontmatter.slug}`,
      component: path.resolve('./src/templates/BlogPost/index.tsx'),
      context: { slug: node.frontmatter.slug }
    })
  });
}
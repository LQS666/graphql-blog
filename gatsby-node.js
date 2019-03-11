const path = require("path")

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve(`src/templates/blogTemplate.js`)
  const blogQuery = await graphql(`
    {
      awesomeblog{
        posts: postsConnection(first: 50) {
          edges {
            node {
              status
              updatedAt
              createdAt
              id
              title
              image {
                status
                updatedAt
                createdAt
                id
                handle
                fileName
                height
                width
                size
                mimeType
                url
              }
              description
              tags
              author {
                id
                name
              }
              date
              slug
            }
          }
        }
      }
    }
  `)

  blogQuery.data.awesomeblog.posts.edges.forEach(post => {
    createPage({
      path: post.node.slug,
      component: blogTemplate,
      context: {
        data: post.node,
      },
    })
  })
}
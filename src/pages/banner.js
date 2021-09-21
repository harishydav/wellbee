import React from "react"
import { graphql } from 'gatsby'
import PostLink from "../components/post-link"
import "../styles/remove-border.scss"

const BannerPage = ({
  data: {
    allMarkdownRemark: { edges }, 
  },
}) => {

  console.log('edges: ', edges);
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

  return (
    <div>
      <div className="grids">
        {Posts}
      </div>
    </div>
  )
}

export default BannerPage
export const pageQuery = graphql`
  query bannerPageQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            thumbnail
          }
        }
      }
    }
  }
`

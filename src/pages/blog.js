import React from "react"
import Helmet from 'react-helmet';
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import PostLink from "../components/post-link"
import HeroHeader from "../components/heroHeader"
import TreatmentsTable from "../components/treatmentsTable"

import HeaderImage from "../../static/assets/header.jpeg"
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import "../styles/home-page.scss"

const BlogPage = ({
  data: {
    site,
    allMarkdownRemark: { edges },
  },
}) => {

  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

  return (
  <div style={{
    backgroundImage: 'url('+HeaderImage+')',
    maxWidth:"100%",
    backgroundSize: "contain", 
    // backgroundPosition:"center fixed",
    backgroundRepeat  : 'no-repeat',
  }} >
    <Layout style={{maxWidth:"100%"}} >
        <Helmet>
          <title>{site.siteMetadata.title}</title>
          <meta name="description" content={site.siteMetadata.description} />
        </Helmet>

        <HeroHeader/>





        <h2 style={{fontWeight:500, marginTop: "25%"}} >Articles &darr;</h2>
        <div className="grids">
          {Posts}
        </div>



      </Layout>
    </div>

  )
}

export default BlogPage
export const pageQuery = graphql`
  query blogPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
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

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

import "../styles/home-page.scss"

const IndexPage = ({
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

        <div style={{ height:300 }} />



        <Paper style={{padding: "6%", }} >
        <Typography style={{textAlign : "center"}} variant="h4" component="div" gutterBottom>
        Treatment/Surgeries
      </Typography>


          <TreatmentsTable/>

          {/* <table>
            <tr>
              <th>
              </th>
              <th>
              </th>

            </tr>
            <tr>
              <td>
                Brain & Nerve Surgery
              </td>
              <td>
                Brain & Nerve Surgery
              </td>

            </tr>


        </table> */}

        </Paper>


        <h2 style={{fontWeight:500}} >Blog Posts &darr;</h2>
        <div className="grids">
          {Posts}
        </div>
      </Layout>
    </div>

  )
}

export default IndexPage
export const pageQuery = graphql`
  query indexPageQuery {
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

import React from "react"
import Helmet from 'react-helmet';
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { site, markdownRemark } = data // data.markdownRemark holds your post data
  console.log('site: ', site);
  const { siteMetadata } = site
  console.log('siteMetadata: ', siteMetadata);
  const { frontmatter, html } = markdownRemark
  console.log('frontmatter: ', frontmatter);
  return (
    <Layout>
      <Helmet >
        <title>{frontmatter.title} | {siteMetadata.title}</title>
        <meta name="description" content={frontmatter.metaDescription} />
        <meta name="image" property="og:image" content={siteMetadata.siteUrl +frontmatter.thumbnail} />
        <meta name="title" property="og:title" content= {`${frontmatter.title} | ${siteMetadata.title}`} />
        <meta name="description" property="og:description" content={frontmatter.metaDescription} />
        <meta name="og:type" content="article" />
        <meta name="og:url" content={siteMetadata.siteUrl + frontmatter.path } />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={frontmatter.metaDescription} />
        <meta name="twitter:description" content={frontmatter.metaDescription} />
        <meta name="twitter:creator" content="@upskillie" />
        <meta name="twitter:site" content="@upskillie" />

      </Helmet>
      <div className="blog-post-container">
        <article className="post">
          
          {!frontmatter.thumbnail && (
            <div className="post-thumbnail">
              <h1 className="post-title">{frontmatter.title}</h1>
              <div className="post-meta">{frontmatter.date}</div>
            </div>
          )}
          {!!frontmatter.thumbnail && (
            <div className="post-thumbnail" style={{backgroundImage: `url(${frontmatter.thumbnail})`}}>
              <h1 className="post-title">{frontmatter.title}</h1>
              <div className="post-meta">{frontmatter.date}</div>
            </div>
          )}
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </article>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        thumbnail
        metaDescription
      }
    }
  }
`
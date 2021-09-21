import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Navigation from "../components/navigation"
import 'prismjs/themes/prism-okaidia.css';
import Logo from "../images/icon.png"
import HeaderImage from "../../static/assets/header.jpeg"

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  console.log('data: ', data);
  return (
    <div  className="site-wrapper">
      <header style={{background :'transparent'}} className="site-header">
        <div className="site-title">
          <Link to="/">
             <img style={{height:'30px'}} src={Logo}/>
            {data.site.siteMetadata.title}</Link>
        </div>
        <Navigation />
      </header>

      {children}
      <footer className="site-footer">
        <p>&copy; {new Date().getFullYear()} SKILLFLARE TECHNOLOGIES PVT. LTD </p>
      </footer>
    </div>
  )
}

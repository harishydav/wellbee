import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Navigation from "../components/navigation"
import 'prismjs/themes/prism-okaidia.css';
import Logo from "../images/icon.png"
import HeaderImage from "../../static/assets/header.jpeg"
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import TreatmentsTable from "../components/treatmentsTable"

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
    <div>

      <AppBar position="absolute">
        <Toolbar>
          <Link to="/" style={{flex:.5, color:"white"}}>
          <Typography onclick={() => window.location.href='/'} variant="h6" component="div" sx={{ flexGrow: .5 }}>
            Wellbee
          </Typography>
          </Link>
          <Navigation />
        </Toolbar>
      </AppBar>


      <div className="site-wrapper">
        <header style={{background :'transparent'}} className="site-header">
        <div className="show-me"  style={{position: "absolute", width:"90%", textAlign:"center", top:"9%"}} >
          <TreatmentsTable />
        </div>

        </header>
        {children}
        <footer className="site-footer">
          <p>&copy; {new Date().getFullYear()} Wellbee PVT. LTD </p>
        </footer>
      </div>

    </div>

  )
}

import React from "react"
import {Link} from "gatsby"
import ThemeChanger from "../components/themeChanger"

export default (props) => (
  <div className="navigation">           
  
      <Link to="/about">About us</Link>

      {/* <Link to="/blog">Surgery</Link> */}

      <a className="hover-me"  onMouseOver = {() => console.log( document.querySelector(".show-me").style.opacity = 1 ) }  onMouseLeave= {  () => setTimeout(() => document.querySelector(".show-me").style.opacity = 0 ,10000)  } >Our Treaments</a>

      {/* <Link to="/blog">Hospitalisation</Link>

      <Link to="/blog">HealthPlan</Link> */}

      <Link to="/blog">Articles</Link>

      <Link to="/contact">Contact</Link>
    <ThemeChanger/>
  </div>
  
)
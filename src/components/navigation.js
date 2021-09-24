import React from "react"
import {Link} from "gatsby"
import ThemeChanger from "../components/themeChanger"

export default (props) => (
  <div className="navigation">           
  
      <Link to="/blog">About us</Link>

      {/* <Link to="/blog">Surgery</Link> */}

      <Link to="/blog">Our Treaments</Link>

      {/* <Link to="/blog">Hospitalisation</Link>

      <Link to="/blog">HealthPlan</Link> */}

      <Link to="/blog">Blog</Link>

      <Link to="/contact">Contact</Link>
    <ThemeChanger/>
  </div>
  
)
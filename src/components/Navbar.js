import React from 'react'
import {NavLink} from 'react-router-dom'
import { withRouter } from "react-router";

const Navbar = props => {
  return(
    <nav>
      <NavLink to="/">
        HOME
      </NavLink>
      <NavLink className={props.location.pathname === "/projects" ? "active" : null} to="/projects">
        PROJECTS
        </NavLink>
      <NavLink className={props.location.pathname === "/contact" ? "active" : null} to="/contact">
        CONTACT
      </NavLink>
  </nav>
  )
}

export default withRouter(Navbar)
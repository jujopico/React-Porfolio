import React from 'react'
import {NavLink} from 'react-router-dom'
import { withRouter } from "react-router";
import './Navbar.css'
import Selfie from '../Selfie/Selfie'
import Footer from '../Footer/Footer'


const Navbar = props => {
  return(
    <div className="navbar">
      <Selfie />
      <nav>
        <NavLink className={props.location.pathname === "/" ? "active" : "inactive"} exact to="/">
          HOME
        </NavLink>
        <NavLink className={props.location.pathname === "/projects" ? "active" : "inactive"} to="/projects">
          PROJECTS
          </NavLink>
        <NavLink className={props.location.pathname === "/contact" ? "active" : "inactive"} to="/contact">
          CONTACT
        </NavLink>
      </nav>
      <Footer />
    </div>
  )
}

export default withRouter(Navbar)
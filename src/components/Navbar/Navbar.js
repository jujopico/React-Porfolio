import React from 'react'
import { Link, animateScroll as scroll } from "react-scroll"
import './Navbar.css'
import Selfie from '../Selfie/Selfie'
import Footer from '../Footer/Footer'

class Navbar extends React.Component {
  scrollToTop = () => {
    scroll.scrollToTop()
  }
  render() {
    return (
      <div className="navbar">
        <Selfie />
        <nav>
          <div>
          <ul>
          <li className="nav-item">
            <Link
              activeClass="active"
              to=""
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={this.scrollToTop}
            >
              HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section1"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                
              >
                PROJECTS
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section2"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                CONTACT
              </Link>
            </li>
          </ul>
          </div>
        </nav>
        <Footer />
      </div>
    )
  }
}

export default Navbar
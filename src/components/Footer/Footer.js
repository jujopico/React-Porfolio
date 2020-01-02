import React from 'react'
import './Footer.css'
import githubLogo from '../../assets/images/githubLogo.png'
import linkedinIcon from '../../assets/images/linkedinIcon.png'

const Footer = () => (
  <footer>
    <div className="copyRight">&copy;2019 Made with ❤ by Jun Su</div>
    <div className="socialMedia">
      <div className="logos">
        <a href="https://github.com/jujopico" target="blank">
          <img src={githubLogo} alt="github" />
        </a>
        <a href="https://www.linkedin.com/in/junsu1112/" target="blank">
          <img src={linkedinIcon} alt="linkedin"/>
        </a>
      </div>
      <div className="resume">
        <a target="blank" download href="../../assets/pdf/Resume.pdf">
          <button>Download Resume</button>
        </a>
      </div>
    </div>
  </footer>
)

export default Footer
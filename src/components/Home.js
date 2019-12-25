import React from 'react'
import Carousel from './Carousel/Carousel'
import Projects from './Projects/Projects'
import Contact from './Contact/Contact'
import Section from '../Section'

class Home extends React.Component {
  render(){
    return(
      <div className="mainContainer">
        <Carousel />
        <div className="projectsContainer">
          <Section
              title="PROJECTS"
              id="section1"
            />
          <Projects />
        </div>
        <div className="contactContainer">
        <Section
            title="CONTACT"
            id="section2"
          />
        <Contact />
        </div>
      </div>
    )
  }
}

export default Home
import React from 'react'
import videojuego from '../../assets/images/videojuego.png'
import wynstore from '../../assets/images/wynstore.png'
import './Projects.css'

class Projects extends React.Component {
  render(){
    return(
      <div className="projectsContainer">
        <div className="projectsPageTitle">
          PROJECTS
        </div>
        <div className="projectsListContainer">
          <div className="videojuegoContainer">
            <img src={ videojuego } alt="videojueGO!" className="projectsImg" />
            <div className="projectsOverlay">
              <a href="https://github.com/jujopico/videojueGO" className="githubLinks">Check on Github</a>
            </div>
            <div className="projectsTitle">
              videojueGO!
            </div>
            <div className="projectsDescription">
              A video game search engine based on <span className="highlightsInDesp">RAWG games database and React.js</span>, which allows users to look up detailed game information.
            </div>
          </div>
          <div className="wynstoreContainer">
            <img src={ wynstore } alt="wynstore" className="projectsImg" />
            <div className="projectsOverlay">
            <a href="https://github.com/jujopico/wynstore" className="githubLinks">Check on Github</a>
            </div>
            <div className="projectsTitle">
              Wynstore
            </div>
            <div className="projectsDescription">
              An e-commerce site mostly based on <span className="highlightsInDesp">Ruby on Rails</span> and <span className="highlightsInDesp">React.js</span> for purchasing Wyncode Academy merchandises.
            </div>
          </div>
        </div>
      </div> 
    )
  }
}

export default Projects

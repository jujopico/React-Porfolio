import React from 'react'
import videojuego from '../../assets/images/videojuego.png'
import wynstore from '../../assets/images/wynstore.png'
import portfolio from '../../assets/images/portfolio.png'
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
            <div className="heroImg">
              <img src={ videojuego } alt="videojueGO!" className="projectsImg" />
              <div className="overlay">
                <div className="projectsDescription">
                  A video game search engine based on RAWG games database <span className="highlightsInDesp">API</span>, <span className="highlightsInDesp">Axios</span> and <span className="highlightsInDesp">React.js</span>, which allows users to look up detailed game information.
                </div>
              </div>
            </div>
            <div className="projectsTitle">
              videojueGO
            </div>
            <div className="links">
              <ul>
                <li><a href="https://github.com/jujopico/videojueGO">➨ Check on Github</a></li>
                <li><a href="https://videojuego.herokuapp.com/">➨ Check on Webstie</a></li>
              </ul>
            </div>
          </div>
          <div className="wynstoreContainer">
            <div className="heroImg">
              <img src={ wynstore } alt="wynstore" className="projectsImg" />
              <div className="overlay">
                <div className="projectsDescription">
                  An e-commerce site mostly based on <span className="highlightsInDesp">Ruby</span>, <span className="highlightsInDesp">Ruby on Rails</span>, <span className="highlightsInDesp">React.js</span> and <span className="highlightsInDesp">API</span> for signed-up/guest account to purchase Wyncode Academy merchandises and admin account to manager orders.
                </div>
              </div>
            </div>
            <div className="projectsTitle">
              Wynstore
            </div>
            <div className="links">
              <ul>
                <li><a href="https://github.com/jujopico/wynstore">➨ Check on Github</a></li>
                <li><a href="https://wynstore.herokuapp.com/">➨ Check on Webstie</a></li>
              </ul>
            </div>
          </div>
          <div className="portfolioContainer">
            <div className="heroImg">
              <img src={ portfolio } alt="portfolio" className="projectsImg" />
              <div className="overlay">
                <div className="projectsDescription">
                  A portfolio based on <span className="highlightsInDesp">React</span>, <span className="highlightsInDesp">Javascript</span>, <span className="highlightsInDesp">HTML</span> and <span className="highlightsInDesp">CSS</span>, which allows visitors to navigate to different pages in/out of this site and download resume.
                </div>
              </div>
            </div>
            <div className="projectsTitle">
              Portfolio
            </div>
            <div className="links">
              <ul>
                <li><a href="https://github.com/jujopico/React-Porfolio">➨ Check on Github</a></li>
                <li><a href="https://www.junsu.dev/">➨ Check on Webstie</a></li>
              </ul>
            </div>
          </div>  
        </div>
      </div> 
    )
  }
}

export default Projects

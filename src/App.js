import React from 'react'
import  {BrowserRouter, Switch, Route} from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import ProjectsPage from './pages/ProjectsPage'
import Navbar from './components/Navbar/Navbar'


class App extends React.Component{

  render(){
    return(
      <div className="homeContainer">
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/projects" component={ProjectsPage}/>
            <Route path="/contact" />
          </Switch>
        </BrowserRouter>
      </div>

    )
  }
}

export default App

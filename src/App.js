import React from 'react'
import  {BrowserRouter, Switch, Route} from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar/Navbar'


class App extends React.Component{

  render(){
    return(
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" />
          <Route path="/contact" />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App

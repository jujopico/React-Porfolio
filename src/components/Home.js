import React from 'react'
import Carousel from './Carousel/Carousel'
import Floating from './Floating/Floating'

class Home extends React.Component {
  render(){
    return(
      <>
      <Carousel />
      <Floating />
      </>
    )
  }
}

export default Home
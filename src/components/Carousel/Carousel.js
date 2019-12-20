import React from 'react'
import { Gallery, GalleryImage } from 'react-gesture-gallery'
import './Carousel.css'
import bkg1 from '../../assets/images/bkg1.jpg'
import bkg2 from '../../assets/images/bkg2.jpg'

const Carousel= () => {
    const INITIAL_INDEX = 0
    const [index, setIndex] = React.useState(INITIAL_INDEX)
    const images = [ `${ bkg1}`, `${bkg2}` ] 
    const wordsJun = " Jun"
    const splitJun = wordsJun.split("")
    const wordsDeveloper = " Developer"
    const splitDeveoper = wordsDeveloper.split("")
    const wordsCodes = " Clean Codes"
    const splitCodes = wordsCodes.split("")
    const wordsToys = " Toys"
    const splitToys = wordsToys.split("")

    React.useEffect(() => {
      const interval = setInterval(() => {
        if(index === images.length - 1){
          setIndex(INITIAL_INDEX)
        }else{
          setIndex(index + 1)
        }
      }, 4000)
      return() => clearInterval(interval)
    }) 

    return(
      <div className="carouselContainer">
        <div className="carouselImages">
        <Gallery 
          index = {index}
          onRequestChange = {i => {
            setIndex(i)
          }}
        >
        {images.map(image => (
            <GalleryImage objectFit="contain" src={image} key={index} />
        ))}
        </Gallery>
      </div>
        <div className="carouselInfo">
          <div>
            Hi!
          </div>
          <div className="junContainer">
            I'm
            {
              splitJun.map((letter, i) => (
                <div className="jun" key={i} >{letter === " " ? "\xa0" : letter}</div>
              ))
            },
          </div>
          <div className="developerContainer">
            a web
            {
              splitDeveoper.map((letter, i) => (
                <div className="developer" key={i} >{letter === " " ? "\xa0" : letter}</div>
              ))
            }.
          </div>
          <div className="codesContainer">
            I love
            {
              splitCodes.map((letter, i) => (
                <div className="codes" key={i} >{letter === " " ? "\xa0" : letter}</div>
              ))
            }
          </div>
          <div className="toysContainer">
            &
            {
              splitToys.map((letter, i) => (
                <div className="toys" key={i} >{letter === " " ? "\xa0" : letter}</div>
              ))
            }.
          </div>
        </div>
      </div>
    )
  }

export default Carousel


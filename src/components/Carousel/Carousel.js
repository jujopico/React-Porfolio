import React from 'react'
import { Gallery, GalleryImage } from 'react-gesture-gallery'

const INITIAL_INDEX = 0

function Carousel() {

    const [index, setIndex] = React.useState(INITIAL_INDEX)
    const images = [
      "https://66.media.tumblr.com/ec7bbd21ed673f093d64482609e0dc39/b046c728e84f4d9f-8a/s1280x1920/a6ab15cfae38c11c22f46990471cc77b6c9c896f.jpg", 
      "https://66.media.tumblr.com/04c973478f69bb3bc7940e427693b2cb/b046c728e84f4d9f-b0/s1280x1920/4f6b8f991f9ecf206d557b638511f070f90789f4.jpg"
    ]

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
      <Gallery
        index = {index}
        onRequestChange = {i => {
          setIndex(i)
        }}
      >
        {images.map(image => (
          <GalleryImage objectFit="contain" src={image} />
        ))}
      </Gallery>

    )
  }

export default Carousel


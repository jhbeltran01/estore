import CarouselOverlay from '@Components/carousel/CarouselOverlay'
import React, { useEffect, useState } from 'react'

type ImageSliderProps = {
  images: {
    id: string
    imgSrc: string,
    isClone: boolean
  }[]
}

const ImageSlider = ({ images }: ImageSliderProps): JSX.Element => {
  return (
    <div className='carousel carousel-product-view-nav overflow-hidden' id='js-product-view-nav'>
      <CarouselOverlay />
      <div className='carousel-product-view-nav__slider flex' id='js-product-view-slider'>
        {
          images.map((image, index: number) => (
            <img
              id='js-nav-img'
              key={index}
              src={image.imgSrc}
              alt="product image"
            />
          ))
        }
      </div>
    </div>
  )
}

export default ImageSlider
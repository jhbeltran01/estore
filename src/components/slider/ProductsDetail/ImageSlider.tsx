import React from 'react'

type ImageSliderProps = {
  images: string[]
}

const ImageSlider = ({ images }: ImageSliderProps): JSX.Element => {
  return (
    <div className='carousel-product-view-nav overflow-hidden'>
      <div className='carousel-product-view-nav__slider flex'>
        {
          images.map(image => (
            <img src={image} alt="product image" />
          ))
        }
      </div>
    </div>
  )
}

export default ImageSlider
import React from 'react'
import "@Utils/toggleMobileNavMenu";

type ImageCarouselProps = {
  images: string[]
}

const ImageCarousel = ({ images }: ImageCarouselProps): JSX.Element => {
  return (
    <div className='carousel-product-view overflow-hidden'>
      <div className='carousel-product__slider flex'>
        {
          images.map(image => (
            <img src={image} alt="product image" />
          ))
        }
      </div>
    </div>
  )
}

export default ImageCarousel
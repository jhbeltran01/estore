import React, { useState } from 'react'
import "@Utils/toggleMobileNavMenu";

type ImageCarouselProps = {
  images: string[]
}

const ImageCarousel = ({ images }: ImageCarouselProps): JSX.Element => {
  const [activeImage, setActiveImage] = useState(0)

  return (
    <div className='carousel-product-view overflow-hidden'>
      <div className='carousel-product__slider flex'>
        {
          images.map((image: string, index: number) => (
            <img
              key={index}
              src={image}
              className={activeImage === index ? 'active' : ''}
              alt="product image" />
          ))
        }
      </div>
    </div>
  )
}

export default ImageCarousel
import React, { useEffect, useState } from 'react'
import "@Utils/toggleMobileNavMenu";

type ImageCarouselProps = {
  images: {
    id: string,
    imgSrc: string,
    isClone: boolean
  }[],
  activeImgId: string
}

const ImageCarousel = ({ images, activeImgId }: ImageCarouselProps): JSX.Element => {
  return (
    <div className='carousel-product-view overflow-hidden'>
      <div className='carousel-product__slider flex'>
        {
          images.map((image, index) => (
            <img
              key={index}
              src={image.imgSrc}
              className={activeImgId === image.id ? 'active' : ''}
              alt="product image" />
          ))
        }
      </div>
    </div>
  )
}

export default ImageCarousel
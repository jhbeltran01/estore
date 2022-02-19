import React, { useContext, useState, useEffect } from 'react';
import ProductsContent from './contents/ProductsContent';

import { Products } from '../../home';

function ProductsSlider() {
  const products = useContext(Products);
  const [carouselWidth, setCarouselWidth] = useState(0);

  const determineCarouselWidth = (): void => {
    const carousel = document.querySelector('.carousel-products');
    setCarouselWidth(carousel ? carousel.clientWidth : 0)
  }

  useEffect(determineCarouselWidth, [])

  const updateCarouselWidth = (): void => {
    const carousel = document.querySelector('.carousel-products')
    window.addEventListener('resize', () => {
      setCarouselWidth(carousel ? carousel.clientWidth : 0)
    })
  }

  useEffect(updateCarouselWidth, [])

  return (
    <div className='carousel-products mar-x-2'>
      <div className='carousel-products__slider flex'>
        {
          products.map((datum: any, index: number) =>
            <ProductsContent
              key={index}
              imgSrc={datum.imgSrc}
              name={datum.name}
              rating={datum.rating}
              prize={datum.prize}
              cardWidth={carouselWidth} />)
        }
      </div>
    </div>
  );
}

export default ProductsSlider;

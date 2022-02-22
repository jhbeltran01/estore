import React, { useContext, useState, useEffect } from 'react';
import ProductsContent from './Content';

type ProductsSliderProps = {
  products: any
}

const ProductsSlider = ({ products }: ProductsSliderProps): JSX.Element => {
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

  let responsiveWidth = 0;

  const isMediumViewport: boolean = carouselWidth >= 736;
  const isLargeViewport: boolean = carouselWidth >= 992;

  if (isLargeViewport) {
    setCarouselWidth(carouselWidth / 4);
  } else if (isMediumViewport) {
    setCarouselWidth(carouselWidth / 3)
  } else {
    // do nothing
  }


  return (
    <div className='carousel-products'>
      <div className='carousel-products__slider flex'>
        {
          products.map((datum: any, index: number) =>
            <ProductsContent
              key={datum.id}
              imgSrc={datum.imgSrc}
              name={datum.name}
              rating={datum.rating}
              prize={datum.prize}
              cardWidth={carouselWidth}
              isForCarousel={true} />)
        }
      </div>
    </div>
  );
}

export default ProductsSlider;

import React, { useContext, useState, useEffect } from 'react';
import ProductsContent from './Content';
import useCarouselTransition from '@Hooks/useCarouselTransition';
import useProductsSliderTransition from '@Hooks/useProductsSliderTransition';

type ProductsSliderProps = {
  products: {}[],
  name: string
}



const ProductsSlider = ({ products, name }: ProductsSliderProps): JSX.Element => {
  const [contentWidth, setContentWidth] = useState(0);
  const [productsWithClones, setProductsWithClones] = useState([products[products.length - 1], ...products, products[0]])


  const determineContentWidth = (): void => {
    const carousel = document.querySelector(`.js-${name}-carousel`);
    setContentWidth(carousel ? carousel.clientWidth : 0)
  }

  useEffect(determineContentWidth, [])



  const clonesForLargeViewport = () => {
    const tempClones = [
      products[products.length - 3],
      products[products.length - 2],
      products[products.length - 1],
      ...products, products[0]
    ]
    setProductsWithClones(tempClones)

    return tempClones;
  }



  const clonesForMediumViewport = () => {
    const tempClones = [
      products[products.length - 2],
      products[products.length - 1],
      ...products, products[0]
    ]
    setProductsWithClones(tempClones)
    return tempClones;
  }



  const clonesForSmallViewport = () => {
    const tempClones = [
      products[products.length - 1],
      ...products, products[0]
    ]
    setProductsWithClones(tempClones)
    return tempClones;
  }



  const getContentLength = () => {
    const carousel = document.querySelector(`.js-${name}-carousel`) as HTMLDivElement;
    const isForLargeViewport = carousel.clientWidth >= 992;
    const isForMediumViewport = carousel.clientWidth >= 736;

    let length: number;
    let isForSmallViewport = !isForLargeViewport && !isForMediumViewport;

    if (isForLargeViewport) {
      length = clonesForLargeViewport().length;
    } else if (isForMediumViewport) {
      length = clonesForMediumViewport().length;
    } else {
      length = clonesForSmallViewport().length;
    }

    return { length, isForSmallViewport }
  }



  useEffect(() => {
    const carouselProps = {
      name: name,
      contentLength: productsWithClones.length,
      intervalTime: 5000,
    }

    const { length, isForSmallViewport } = getContentLength();

    let transitionHook = isForSmallViewport ? useCarouselTransition(carouselProps) : useProductsSliderTransition(carouselProps);

    const { slider, sliderInterval, transitionEndHandler } = transitionHook;

    return () => {
      clearInterval(sliderInterval);
      slider.removeEventListener('transitionend', transitionEndHandler);
    }
  }, [contentWidth])



  const updateContentWidth = (): void => {
    const carousel = document.querySelector(`.js-${name}-carousel`)
    window.addEventListener('resize', () => {
      setContentWidth(carousel ? carousel.clientWidth : 0)
    })
  }

  useEffect(updateContentWidth, [])



  const isForMediumViewport = contentWidth >= 736;
  const isForLargeViewport = contentWidth >= 992;

  if (isForLargeViewport) {
    setContentWidth(contentWidth / 4);
  } else if (isForMediumViewport) {
    setContentWidth(contentWidth / 3)
  } else {
    // do nothing
  }


  return (
    <div className={`carousel-products js-${name}-carousel`}>
      <div className={`carousel-products__slider  js-${name}-carousel-slider flex`}>
        {
          productsWithClones.map((datum: any, index: number) =>
            <ProductsContent
              key={index}
              imgSrc={datum.imgSrc}
              name={datum.name}
              rating={datum.rating}
              prize={datum.prize}
              cardWidth={contentWidth}
              isForCarousel={true} />
          )
        }
      </div>
    </div>
  );
}

export default ProductsSlider;

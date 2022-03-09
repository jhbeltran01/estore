import React, { useContext, useState, useEffect } from 'react';
import ProductsContent from './Content';
import useCarouselTransition from '@Hooks/useCarouselTransition';
import useSliderTransition from '@Hooks/useSliderTransition';

type ProductsSliderProps = {
  products: {}[],
  name: string
}

const ProductsSlider = ({ products, name }: ProductsSliderProps): JSX.Element => {
  const [carouselWidth, setCarouselWidth] = useState(0);
  const [dataWithClones, setDataWithClones] = useState([products[products.length - 1], ...products, products[0]])


  const determineCarouselWidth = (): void => {
    const carousel = document.querySelector(`.js-${name}-carousel`);
    setCarouselWidth(carousel ? carousel.clientWidth : 0)
  }

  useEffect(determineCarouselWidth, [])


  useEffect(() => {
    const carouselProps = {
      carouselName: `.js-${name}-carousel`,
      sliderName: `.js-${name}-carousel__slider`,
      contentLength: dataWithClones.length,
      intervalTime: 5000,
      width: 0
    }

    const carousel = document.querySelector(`.js-${name}-carousel`) as HTMLDivElement;

    let carouselInterval: NodeJS.Timer;
    const isForLargeViewport = carousel.clientWidth >= 992;
    const isForMediumViewport = carousel.clientWidth >= 736;

    if (isForLargeViewport) {
      setDataWithClones([products[products.length - 3], products[products.length - 2], products[products.length - 1], ...products, products[0]])
      carouselProps.width = 992;
      carouselInterval = useSliderTransition(carouselProps);
    } else if (isForMediumViewport) {
      setDataWithClones([products[products.length - 2], products[products.length - 1], ...products, products[0]])
      carouselInterval = useSliderTransition(carouselProps);
    } else {
      carouselInterval = useCarouselTransition(carouselProps)
    }

    return () => {
      clearInterval(carouselInterval);
    }
  }, [carouselWidth])


  const updateCarouselWidth = (): void => {
    const carousel = document.querySelector(`.js-${name}-carousel`)
    window.addEventListener('resize', () => {
      setCarouselWidth(carousel ? carousel.clientWidth : 0)
    })
  }

  useEffect(updateCarouselWidth, [])



  const isForMediumViewport = carouselWidth >= 736;
  const isForLargeViewport = carouselWidth >= 992;

  if (isForLargeViewport) {
    setCarouselWidth(carouselWidth / 4);
  } else if (isForMediumViewport) {
    setCarouselWidth(carouselWidth / 3)
  } else {
    // do nothing
  }


  return (
    <div className={`carousel-products js-${name}-carousel`}>
      <div className={`carousel-products__slider  js-${name}-carousel__slider flex`}>
        {
          dataWithClones.map((datum: any, index: number) =>
            <ProductsContent
              key={index}
              imgSrc={datum.imgSrc}
              name={datum.name}
              rating={datum.rating}
              prize={datum.prize}
              cardWidth={carouselWidth}
              isForCarousel={true} />
          )
        }
      </div>
    </div>
  );
}

export default ProductsSlider;

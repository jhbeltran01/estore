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
      intervalTime: 2000
    }

    const carousel = document.querySelector(`.js-${name}-carousel`) as HTMLDivElement;

    let carouselInterval: NodeJS.Timer;
    const isForCarousel = carousel.clientWidth < 736;
    if (isForCarousel) {
      carouselInterval = useCarouselTransition(carouselProps)
    } else {
      const sliderProps = {
        ...carouselProps,
        products: products
      }
      var { sliderInterval, tempDataWithClones } = useSliderTransition(sliderProps);
      setDataWithClones(tempDataWithClones)
    }

    return () => {
      clearInterval(carouselInterval);
      if (isForCarousel) return;
      clearInterval(sliderInterval)
    }
  }, [carouselWidth])


  const updateCarouselWidth = (): void => {
    const carousel = document.querySelector(`.js-${name}-carousel`)
    window.addEventListener('resize', () => {
      setCarouselWidth(carousel ? carousel.clientWidth : 0)
    })
  }

  useEffect(updateCarouselWidth, [])



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

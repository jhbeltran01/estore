import React, { useState, useEffect } from 'react';
import ProductsContent from './Content';
import useCarouselTransition from '@Hooks/transitions/useCarouselTransition';
import useSliderTransition from '@Hooks/transitions/useSliderTransition';
import useGetClones from '@Hooks/useGetClones';

type ProductsSliderProps = {
  products: {}[],
  name: string
}



const ProductsSlider = ({ products, name }: ProductsSliderProps): JSX.Element => {
  const [contentWidth, setContentWidth] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(0);
  const [productsWithClones, setProductsWithClones] = useState([{}]);



  useEffect((): void => {
    const carousel = document.getElementById(`js-${name}-carousel`) as HTMLDivElement;
    setContentWidth(carousel.clientWidth);
    setViewportWidth(window.innerWidth);

    window.addEventListener('resize', () => {
      setContentWidth(carousel.clientWidth);
      setViewportWidth(window.innerWidth);
    })
  }, [])



  const getNumberOfClones = (): number => {
    const isForLargeViewport = viewportWidth >= 992;
    const isForMediumViewport = viewportWidth >= 736;

    if (isForLargeViewport) {
      return 4
    } else if (isForMediumViewport) {
      return 3;
    } else {
      return 2;
    }
  }



  useEffect(() => {
    const numberOfClones = getNumberOfClones()

    const tempClones = useGetClones(numberOfClones, products);
    setProductsWithClones(tempClones)

    const props = {
      name: name,
      contentLength: tempClones.length,
      intervalTime: 5000,
      numberOfClones: numberOfClones
    }

    const isForSmallViewport = viewportWidth < 736;
    const { slider, sliderInterval, transitionEndHandler } = isForSmallViewport ? useCarouselTransition(props) : useSliderTransition(props);

    return () => {
      clearInterval(sliderInterval);
      slider.removeEventListener('transitionend', transitionEndHandler);
    }
  }, [contentWidth])



  const isForMediumViewport = viewportWidth >= 736;
  const isForLargeViewport = viewportWidth >= 992;

  let responsiveWidth = 0

  if (isForLargeViewport) {
    responsiveWidth = contentWidth / 4;
  } else if (isForMediumViewport) {
    responsiveWidth = contentWidth / 3;
  } else {
    responsiveWidth = contentWidth;
  }


  return (
    <div className='pad-4'>
      <div className='carousel-products' id={`js-${name}-carousel`}>
        <div className='carousel-products__slider flex' id={`js-${name}-slider`}>
          {
            productsWithClones.map((datum: any, index: number) =>
              <ProductsContent
                key={index}
                imgSrc={datum.imgSrc}
                name={datum.name}
                rating={datum.rating}
                prize={datum.prize}
                cardWidth={responsiveWidth}
              />
            )
          }
        </div>
      </div>
    </div>
  );
}

export default ProductsSlider;

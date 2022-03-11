import useCarouselTransition from '@Hooks/useCarouselTransition';
import useGetClones from '@Hooks/useGetClones';
import useSliderTransition from '@Hooks/useSliderTransition';
import React, { useEffect, useState } from 'react'
import ProductsContent from '../Products/Content'

type RelatedProductsSliderProps = {
  products: {}[],
  name: string
}


function RelatedProductsSlider({ products, name }: RelatedProductsSliderProps) {
  const [contentWidth, setContentWidth] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(0)
  const [productsWithClones, setProductsWithClone] = useState([{}])


  useEffect(() => {
    const isForSmallViewport = viewportWidth < 768;
    const numberOfClones = isForSmallViewport ? 2 : 3;
    const tempClones = useGetClones(numberOfClones, products)

    setProductsWithClone(tempClones)

    const props = {
      name: name,
      contentLength: tempClones.length,
      intervalTime: 5000,
      numberOfClones: numberOfClones
    }

    const { slider, sliderInterval, transitionEndHandler } = isForSmallViewport ? useCarouselTransition(props) : useSliderTransition(props)

    return () => {
      clearInterval(sliderInterval)
      slider.removeEventListener('transitionend', transitionEndHandler);
    }
  }, [viewportWidth])


  useEffect((): void => {
    const carousel = document.querySelector(`.js-${name}-carousel`) as HTMLDivElement
    setContentWidth(carousel.clientWidth);
    setViewportWidth(window.innerWidth)

    window.addEventListener('resize', () => {
      setContentWidth(carousel.clientWidth)
      setViewportWidth(window.innerWidth)
    })
  }, [])



  const responsiveWidth = viewportWidth >= 768 ? contentWidth / 3 : contentWidth;
  // console.log(contentWidth)

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
              cardWidth={responsiveWidth}
              isForCarousel={true} />
          )
        }
      </div>
    </div>
  )
}

export default RelatedProductsSlider
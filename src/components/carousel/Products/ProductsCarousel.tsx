import ProductsContent from '@Components/slider/Products/Content';
import useCarouselTransition from '@Hooks/useCarouselTransition';
import React, { useEffect, useState } from 'react'

type ProductsCarouselProps = {
  products: {}[]
}

const ProductsCarousel = ({ products }: ProductsCarouselProps): JSX.Element => {
  const [contentWidth, setContentWidth] = useState(0);
  const productsWithClones = [products[products.length - 1], ...products, products[0]]



  useEffect(() => {
    const carousel = document.getElementById('js-products-carousel') as HTMLDivElement;
    setContentWidth(carousel.clientWidth)

    window.addEventListener('resize', () => {
      setContentWidth(carousel.clientWidth)
    })
  }, [])



  useEffect(() => {
    const sliderProps = {
      name: 'products',
      contentLength: productsWithClones.length,
      intervalTime: 5000
    }
    useCarouselTransition(sliderProps);
  }, [])



  return (
    <div className='carousel-hero' id='js-products-carousel'>
      <div className='carousel-hero__overlay flex-container-3'>
        <button className='btn-next-2 left'>
          <span className='left-arrow'></span>
        </button>
        <button className='btn-next-2 right'>
          <span className='right-arrow'></span>
        </button>
      </div>
      <div className='carousel-hero__slider flex' id='js-products-slider'>
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
    </div >
  )
}

export default ProductsCarousel
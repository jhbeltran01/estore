import CarouselOverlay from '@Components/carousel/CarouselOverlay'
import React, { useEffect, useState } from 'react'

type ImageSliderProps = {
  images: {
    id: string
    imgSrc: string,
    isClone: boolean
  }[],
  displayedContent: number,
  isSlidingLeft: boolean
}

const ImageSlider = ({ images, displayedContent, isSlidingLeft }: ImageSliderProps): JSX.Element => {
  useEffect(() => {
    const carousel = document.getElementById('js-product-view-nav') as HTMLDivElement;
    const slider = carousel.querySelector('#js-product-view-slider') as HTMLDivElement;

    slider.style.transition = 'none';
    slider.style.transform = `translateX(-${(carousel.clientWidth / 5) * 3}px)`
    console.log((carousel.clientWidth / 5))
  }, [])


  useEffect(() => {
    const carousel = document.getElementById('js-product-view-nav') as HTMLDivElement;
    const slider = carousel.querySelector('#js-product-view-slider') as HTMLDivElement;
    const content = slider.querySelector('#js-nav-img') as HTMLImageElement;

    const currDisplayed = displayedContent + 3;
    const width = content?.offsetWidth;
    slider.style.transition = '250ms ease-in-out';
    slider.style.transform = `translateX(-${width * currDisplayed}px)`;

    const transitionEndHandler = (): void => {
      if (currDisplayed >= 12 && isSlidingLeft) {
        slider.style.transition = 'none';
        slider.style.transform = `translateX(-${width * 2}px)`
      }

      if (currDisplayed <= 3 && !isSlidingLeft) {
        slider.style.transition = 'none';
        slider.style.transform = `translateX(-${(carousel.clientWidth / 5) * 13}px)`
      }
    }

    slider.addEventListener('transitionend', transitionEndHandler);
    console.log(currDisplayed)
    return () => {
      slider.removeEventListener('transitionend', transitionEndHandler);
    }
  }, [displayedContent])

  return (
    <div className='carousel carousel-product-view-nav overflow-hidden' id='js-product-view-nav'>
      <CarouselOverlay />
      <div className='carousel-product-view-nav__slider flex' id='js-product-view-slider'>
        {
          images.map((image, index: number) => (
            <img
              id='js-nav-img'
              key={index}
              src={image.imgSrc}
              alt="product image"
            />
          ))
        }
      </div>
    </div>
  )
}

export default ImageSlider
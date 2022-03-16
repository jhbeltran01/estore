import CarouselOverlay from '@Components/carousel/CarouselOverlay'
import React, { useEffect, useState } from 'react'

type ImageSliderProps = {
  images: {
    imgSrc: string,
  }[],
  displayedContent: number,
  isSlidingLeft: boolean
}

const ImageSlider = ({ images, displayedContent, isSlidingLeft }: ImageSliderProps): JSX.Element => {
  const [carousel, setCarousel] = useState<HTMLDivElement>();
  const [slider, setSlider] = useState<HTMLDivElement>();
  const [content, setContent] = useState<HTMLImageElement>();

  useEffect(() => {
    const tempContent = slider?.querySelector('#js-nav-img') as HTMLImageElement;
    setContent(tempContent)
  }, [slider, images])



  useEffect(() => {
    const tempCarousel = document.getElementById('js-product-view-nav') as HTMLDivElement;
    const tempSlider = tempCarousel.querySelector('#js-product-view-slider') as HTMLDivElement;
    tempSlider.style.transition = 'none';
    tempSlider.style.transform = `translateX(-${(tempCarousel.clientWidth / 5) * 3}px)`

    setCarousel(tempCarousel);
    setSlider(tempSlider);
  }, [])



  useEffect(() => {
    if (!slider || !content || !carousel) { return };

    const currDisplayed = displayedContent + 3;
    const width = content?.offsetWidth;

    slider.style.transition = '250ms ease-in-out';
    slider.style.transform = `translateX(-${width * currDisplayed}px)`;

    const transitionEndHandler = (): void => {
      const hasReachedLastElement = currDisplayed >= 12;
      if (hasReachedLastElement && isSlidingLeft) {
        slider.style.transition = 'none';
        slider.style.transform = `translateX(-${width * 2}px)`;
      }

      const hasReachedFirstElement = currDisplayed <= 3;
      if (hasReachedFirstElement && !isSlidingLeft) {
        slider.style.transition = 'none';
        slider.style.transform = `translateX(-${(carousel.clientWidth / 5) * 13}px)`;
      }
    }

    slider.addEventListener('transitionend', transitionEndHandler);

    return () => {
      slider.removeEventListener('transitionend', transitionEndHandler);
    }
  }, [displayedContent, carousel, slider, content])



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
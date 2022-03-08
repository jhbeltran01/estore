import React from 'react'

type useSliderTransitionProps = {
  carouselName: string,
  sliderName: string,
  contentLength: number,
  intervalTime: number,
  products: {}[]
}

const useSliderTransition = ({ carouselName, sliderName, contentLength, intervalTime, products }: useSliderTransitionProps) => {
  const carousel = document.querySelector(carouselName) as HTMLDivElement;
  const slider = carousel.querySelector(sliderName) as HTMLDivElement;
  const contentWidth = carousel.querySelector('.js-carousel-content')!.clientWidth;

  let tempDataWithClones: {}[] = [];
  let displayedContent = 1;

  slider.style.transform = `translateX(-${contentWidth * 1}px)`;

  const sliderInterval = setInterval(() => {
    ++displayedContent;
    slider.style.transition = '250ms ease-in-out'
    slider.style.transform = `translateX(-${contentWidth * displayedContent}px)`;

    // if (displayedContent)  
  }, intervalTime)


  return { sliderInterval, tempDataWithClones }
}

export default useSliderTransition
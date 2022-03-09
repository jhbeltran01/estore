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
  const content = carousel.querySelector('.js-carousel-content') as HTMLDivElement;
  const contentWidth = content.clientWidth;

  console.log(content)

  let tempDataWithClones: {}[] = [];
  let displayedContent = 1;

  const sliderInterval = setInterval(() => {
    slider.style.transition = '250ms ease-in-out'
    slider.style.transform = `translateX(-${contentWidth * displayedContent}px)`;

    ++displayedContent;
    // if (displayedContent)  
    console.log(displayedContent)
  }, intervalTime)

  tempDataWithClones = products;

  return { sliderInterval, tempDataWithClones }
}

export default useSliderTransition
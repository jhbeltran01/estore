type useSliderTransitionProps = {
  carouselName: string,
  sliderName: string,
  contentLength: number,
  intervalTime: number,
  width: number
}

const useSliderTransition = ({ carouselName, sliderName, contentLength, intervalTime, width }: useSliderTransitionProps) => {
  const carousel = document.querySelector(carouselName) as HTMLDivElement;
  const slider = carousel.querySelector(sliderName) as HTMLDivElement;
  const content = carousel.querySelector('.js-carousel-content') as HTMLDivElement;
  const contentWidth = content.clientWidth;

  let displayedContent = width >= 992 ? 3 : 2;

  slider.style.transform = `translateX(-${contentWidth * displayedContent}px)`;

  const sliderInterval = setInterval(() => {
    ++displayedContent;
    slider.style.transition = '250ms ease-in-out'
    slider.style.transform = `translateX(-${contentWidth * displayedContent}px)`;
  }, intervalTime)

  slider.addEventListener('transitionend', (): void => {
    if (displayedContent === 5) {
      slider.style.transition = 'none'
      slider.style.transform = `translateX(-${0}px)`;
      displayedContent = 0;
    }
  })

  return sliderInterval
}

export default useSliderTransition
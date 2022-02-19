type useSliderTransitionProps = {
  carouselName: string,
  sliderName: string,
  contentLength: number,
  intervalTime: number
}

const useSliderTransition = ({ carouselName, sliderName, contentLength, intervalTime }: useSliderTransitionProps) => {
  const carousel = document.querySelector(carouselName) as HTMLDivElement;
  const slider = carousel.querySelector(sliderName) as HTMLDivElement;
  let displayedContent = 1;

  slider.style.transform = `translateX(-${carousel.clientWidth * 1}px)`;

  const sliderTransition = setInterval(() => {
    if (displayedContent < contentLength - 1) {
      ++displayedContent;
      slider.style.transition = '500ms ease-in-out';
      slider.style.transform = `translateX(-${carousel.clientWidth * displayedContent}px)`;
    }
  }, intervalTime)


  slider.addEventListener('transitionend', () => {
    if (displayedContent === contentLength - 1) {
      slider.style.transition = 'unset';
      slider.style.transform = `translateX(-${carousel.clientWidth * 1}px)`;
      displayedContent = 1;
    }
  })

  return sliderTransition;
}

export default useSliderTransition;
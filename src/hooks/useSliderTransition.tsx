type useSliderTransitionProps = {
  name: string,
  contentLength: number,
  intervalTime: number,
}

const useSliderTransition = ({ name, contentLength, intervalTime }: useSliderTransitionProps) => {
  const carousel = document.querySelector(`.js-${name}-carousel`) as HTMLDivElement;
  const slider = carousel.querySelector(`.js-${name}-carousel-slider`) as HTMLDivElement;
  const content = carousel.querySelector('.js-carousel-content') as HTMLDivElement;
  const contentWidth = content.clientWidth;

  let displayedContent = carousel.clientWidth >= 992 ? 3 : 2;

  slider.style.transform = `translateX(-${contentWidth * displayedContent}px)`;

  const sliderInterval = setInterval(() => {
    ++displayedContent;
    slider.style.transition = '500ms ease-in-out'
    slider.style.transform = `translateX(-${contentWidth * displayedContent}px)`;
  }, intervalTime)

  const numberOfClones = carousel.clientWidth >= 992 ? 4 : 3

  const transitionEndHandler = (): void => {
    if (displayedContent === contentLength - numberOfClones) {
      slider.style.transition = 'none'
      slider.style.transform = `translateX(-${0}px)`;
      displayedContent = 0;
    }
  }

  slider.addEventListener('transitionend', transitionEndHandler)

  return { slider, sliderInterval, transitionEndHandler }
}

export default useSliderTransition
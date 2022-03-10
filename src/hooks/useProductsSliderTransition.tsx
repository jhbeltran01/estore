type useProductsSliderTransitionProps = {
  name: string,
  contentLength: number,
  intervalTime: number,
}

const useProductsSliderTransition = ({ name, contentLength, intervalTime }: useProductsSliderTransitionProps) => {
  const carousel = document.querySelector(`.js-${name}-carousel`) as HTMLDivElement;
  const slider = carousel.querySelector(`.js-${name}-carousel-slider`) as HTMLDivElement;
  const content = carousel.querySelector('.js-carousel-content') as HTMLDivElement;

  let displayedContent = carousel.clientWidth >= 992 ? 3 : 2;

  slider.style.transform = `translateX(-${content.clientWidth * displayedContent}px)`;

  const sliderInterval = setInterval(() => {
    ++displayedContent;
    slider.style.transition = '500ms ease-in-out'
    slider.style.transform = `translateX(-${content.clientWidth * displayedContent}px)`;
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

export default useProductsSliderTransition
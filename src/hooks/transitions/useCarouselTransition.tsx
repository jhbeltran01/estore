export type UseCarouselTransitionProps = {
  name: string,
  contentLength: number,
  intervalTime: number,
  hasSlider: boolean
}

const useCarouselTransition = ({ name, contentLength, intervalTime, hasSlider }: UseCarouselTransitionProps) => {
  const carouselContainer = document.getElementById(`js-${name}-container`) as HTMLDivElement;
  const carousel = carouselContainer.querySelector(`#js-${name}-carousel`) as HTMLDivElement;
  const slider = carouselContainer.querySelector(`#js-${name}-slider`) as HTMLDivElement;
  const leftArrow = carouselContainer.querySelector('#js-arrow-left') as HTMLDivElement;
  const rightArrow = carouselContainer.querySelector('#js-arrow-right') as HTMLDivElement;

  let displayedContent = 1;
  var sliderInterval: NodeJS.Timer;

  slider.style.transform = `translateX(-${carousel.clientWidth * displayedContent}px)`

  const slideLeft = () => {
    if (displayedContent >= contentLength - 1) { return };

    ++displayedContent;
    slider.style.transition = '500ms ease-in-out'
    slider.style.transform = `translateX(-${carousel.clientWidth * displayedContent}px)`
  }

  sliderInterval = setInterval(slideLeft, intervalTime)

  const slideRight = () => {
    if (displayedContent <= 0) { return };

    --displayedContent;
    slider.style.transition = '500ms ease-in-out'
    slider.style.transform = `translateX(-${carousel.clientWidth * displayedContent}px)`
  }

  const changeSlideDirection = (direction: () => void) => {
    clearInterval(sliderInterval);

    direction()

    sliderInterval = setInterval(direction, intervalTime)
  }


  const leftArrowClickHandler = () => changeSlideDirection(slideRight)
  const rightArrowClickHandler = () => changeSlideDirection(slideLeft)


  leftArrow.addEventListener('click', leftArrowClickHandler)
  rightArrow.addEventListener('click', rightArrowClickHandler)


  const transitionEndHandler = (): void => {
    const hasReachedLastElement = displayedContent === contentLength - 1;
    const hasReachedFirstElement = displayedContent === 0;

    if (hasReachedLastElement) {
      slider.style.transition = 'unset';
      slider.style.transform = `translateX(-${carousel.clientWidth * 1}px)`;
      displayedContent = 1;
    } else if (hasReachedFirstElement) {
      slider.style.transition = 'unset';
      slider.style.transform = `translateX(-${carousel.clientWidth * (contentLength - 2)}px)`;
      displayedContent = contentLength - 2
    } else {
      // do nothing
    }
  }

  if (hasSlider) {
    const removeInterval = () => clearInterval(sliderInterval)

    window.removeEventListener('resize', removeInterval)
    window.addEventListener('resize', removeInterval)
  }

  slider.addEventListener('transitionend', transitionEndHandler)

  return { slider, sliderInterval, transitionEndHandler, leftArrow, leftArrowClickHandler, rightArrow, rightArrowClickHandler }
}

export default useCarouselTransition;
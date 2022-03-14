export type UseCarouselTransitionProps = {
  name: string,
  contentLength: number,
  intervalTime: number
}

const useCarouselTransition = ({ name, contentLength, intervalTime }: UseCarouselTransitionProps) => {
  const carouselContainer = document.getElementById(`js-${name}-container`) as HTMLDivElement;
  const carousel = carouselContainer.querySelector(`#js-${name}-carousel`) as HTMLDivElement;
  const slider = carouselContainer.querySelector(`#js-${name}-slider`) as HTMLDivElement;
  const leftArrow = carouselContainer.querySelector('#js-arrow-left') as HTMLDivElement;
  const rightArrow = carouselContainer.querySelector('#js-arrow-right') as HTMLDivElement;

  let displayedContent = 1;
  let sliderInterval: NodeJS.Timer;


  const slide = () => {
    slider.style.transition = '500ms ease-in-out';
    slider.style.transform = `translateX(-${carousel.clientWidth * displayedContent}px)`;
  }

  const changeSliderInterval = (sliderDirection: Function) => {
    clearInterval(sliderInterval);
    sliderDirection()
    slide()

    sliderInterval = setInterval(() => {
      sliderDirection()
      slide()
    }, intervalTime)
  }

  const slideRight = () => {
    if (displayedContent <= 0) { return };
    --displayedContent;
  }

  const slideLeft = () => {
    if (displayedContent >= contentLength - 1) { return };
    ++displayedContent;
  }



  const leftArrowClickHandler = () => changeSliderInterval(slideRight)
  const rightArrowClickHandler = () => changeSliderInterval(slideLeft)

  if (displayedContent === 1) {
    leftArrow.removeEventListener('click', leftArrowClickHandler);
    rightArrow.removeEventListener('click', rightArrowClickHandler);
  }

  leftArrow.addEventListener('click', leftArrowClickHandler)
  rightArrow.addEventListener('click', rightArrowClickHandler)




  slider.style.transform = `translateX(-${carousel.clientWidth * displayedContent}px)`;

  sliderInterval = setInterval(() => {
    changeSliderInterval(slideLeft)
  }, intervalTime)



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

  slider.addEventListener('transitionend', transitionEndHandler)

  return { slider, sliderInterval, transitionEndHandler }
}

export default useCarouselTransition;
type UseSliderTransitionProps = {
  name: string,
  contentLength: number,
  intervalTime: number,
  numberOfClones: number
}

const useSliderTransition = ({ name, contentLength, intervalTime, numberOfClones }: UseSliderTransitionProps) => {
  const carouselContainer = document.getElementById(`js-${name}-container`) as HTMLDivElement;
  const slider = carouselContainer.querySelector(`#js-${name}-slider`) as HTMLDivElement;
  const content = carouselContainer.querySelector('#js-content') as HTMLDivElement;
  const leftArrow = carouselContainer.querySelector('#js-arrow-left') as HTMLDivElement;
  const rightArrow = carouselContainer.querySelector('#js-arrow-right') as HTMLDivElement;

  let displayedContent = numberOfClones - 1;
  let sliderInterval: NodeJS.Timer;

  const slide = () => {
    slider.style.transition = '500ms ease-in-out'
    slider.style.transform = `translateX(-${content.clientWidth * displayedContent}px)`;
  }



  const slideLeft = (): void => {
    if (displayedContent > contentLength - numberOfClones) { return }

    ++displayedContent;
    slide();
  }



  const slideRight = (): void => {
    if (displayedContent <= 0) { return }
    --displayedContent;
    slide();
  }



  const changeSlideDirection = (direction: () => void) => {
    clearInterval(sliderInterval);

    direction()

    sliderInterval = setInterval(direction, intervalTime)
  }



  const rightArrowClickHandler = () => changeSlideDirection(slideLeft)
  const leftArrowClickHandler = () => changeSlideDirection(slideRight)

  leftArrow.addEventListener('click', leftArrowClickHandler);
  rightArrow.addEventListener('click', rightArrowClickHandler);



  const transitionEndHandler = (): void => {
    const hasReachedLastElement = displayedContent === contentLength - numberOfClones;
    const hasReachedFirstElement = displayedContent === 0;

    if (hasReachedLastElement) {
      slider.style.transition = 'none'
      slider.style.transform = `translateX(0px)`;
      displayedContent = 0;
    } else if (hasReachedFirstElement) {
      slider.style.transition = 'none';
      slider.style.transform = `translateX(-${content.clientWidth * (contentLength - numberOfClones)}px)`;
      displayedContent = contentLength - numberOfClones

    } else {
      // do nothing
    }
  }
  slider.addEventListener('transitionend', transitionEndHandler)


  slider.style.transform = `translateX(-${content.clientWidth * displayedContent}px)`;
  sliderInterval = setInterval(slideLeft, intervalTime)

  return { slider, sliderInterval, transitionEndHandler, leftArrow, leftArrowClickHandler, rightArrow, rightArrowClickHandler }
}

export default useSliderTransition
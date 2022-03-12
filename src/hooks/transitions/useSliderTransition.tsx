type UseSliderTransitionProps = {
  name: string,
  contentLength: number,
  intervalTime: number,
  numberOfClones: number
}

const useSliderTransition = ({ name, contentLength, intervalTime, numberOfClones }: UseSliderTransitionProps) => {
  const carousel = document.getElementById(`js-${name}-carousel`) as HTMLDivElement;
  const slider = carousel.querySelector(`#js-${name}-slider`) as HTMLDivElement;
  const content = carousel.querySelector('#js-content') as HTMLDivElement;

  let displayedContent = numberOfClones - 1;

  slider.style.transform = `translateX(-${content.clientWidth * displayedContent}px)`;


  const sliderInterval = setInterval(() => {
    ++displayedContent;
    slider.style.transition = '500ms ease-in-out'
    slider.style.transform = `translateX(-${content.clientWidth * displayedContent}px)`;
  }, intervalTime)


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
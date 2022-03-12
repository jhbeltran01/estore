export type UseCarouselTransitionProps = {
  name: string,
  contentLength: number,
  intervalTime: number
}

const useCarouselTransition = ({ name, contentLength, intervalTime }: UseCarouselTransitionProps) => {
  const carousel = document.getElementById(`js-${name}-carousel`) as HTMLDivElement;
  const slider = carousel.querySelector(`#js-${name}-slider`) as HTMLDivElement;
  let displayedContent = 1;

  slider.style.transform = `translateX(-${carousel.clientWidth * displayedContent}px)`;

  const sliderInterval = setInterval(() => {
    if (displayedContent < contentLength - 1) {
      ++displayedContent;
      slider.style.transition = '500ms ease-in-out';
      slider.style.transform = `translateX(-${carousel.clientWidth * displayedContent}px)`;
    }
  }, intervalTime)


  const transitionEndHandler = (): void => {
    if (displayedContent === contentLength - 1) {
      slider.style.transition = 'unset';
      slider.style.transform = `translateX(-${carousel.clientWidth * 1}px)`;
      displayedContent = 1;
    }
  }

  slider.addEventListener('transitionend', transitionEndHandler)

  return { slider, sliderInterval, transitionEndHandler }
}

export default useCarouselTransition;
import React, { useEffect, useState } from 'react';
import useSliderTransition from '@Hooks/transitions/useCarouselTransition';
import CarouselOverlay from './CarouselOverlay';

type CarouselProps = {
  data: {}[],
  name: string,
  contentsHook: (dataWithClones: {}[], contentWidth: number) => JSX.Element[]
}

const Carousel = ({ data, name, contentsHook }: CarouselProps): JSX.Element => {
  const [contentWidth, setContentWidth] = useState(0);
  const dataWithClones = [data[data.length - 1], ...data, data[0]]



  useEffect(() => {
    const carousel = document.getElementById(`js-${name}-carousel`) as HTMLDivElement;
    setContentWidth(carousel.clientWidth)

    window.addEventListener('resize', () => {
      setContentWidth(carousel.clientWidth)
    })
  }, [])



  useEffect(() => {
    const sliderProps = {
      name: name,
      contentLength: dataWithClones.length,
      intervalTime: 5000
    }
    useSliderTransition(sliderProps);
  }, [])




  const contents = contentsHook(dataWithClones, contentWidth)

  return (
    <div className={`carousel carousel-${name}`} id={`js-${name}-carousel`}>
      <CarouselOverlay />
      <div className={`carousel-${name}__slider flex`} id={`js-${name}-slider`}>
        {contents}
      </div>
    </div>
  )
}

export default Carousel;

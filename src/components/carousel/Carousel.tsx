import React, { useEffect, useState } from 'react';
import useSliderTransition from '@Hooks/useCarouselTransition';

type CarouselProps = {
  data: {}[],
  name: string,
  contentsHook: (dataWithClones: {}[], contentWidth: number) => JSX.Element[]
}

const HeroCarousel = ({ data, name, contentsHook }: CarouselProps): JSX.Element => {
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
    <div className={`carousel-${name}`} id={`js-${name}-carousel`}>
      <div className={`carousel-${name}__overlay flex-container-3`}>
        <button className='btn-next-2 left'>
          <span className='left-arrow'></span>
        </button>
        <button className='btn-next-2 right'>
          <span className='right-arrow'></span>
        </button>
      </div>
      <div className={`carousel-${name}__slider flex`} id={`js-${name}-slider`}>
        {contents}
      </div>
    </div>
  )
}

export default HeroCarousel;

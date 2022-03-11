import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom'
import useSliderTransition from '@Hooks/useCarouselTransition';
import HeroContent from './Content';

type HeroCarouselProps = {
  data: {
    imgSrc: string,
    desc: string
  }[]
}

const HeroCarousel = ({ data }: HeroCarouselProps): JSX.Element => {
  const [contentWidth, setContentWidth] = useState(0);
  const dataWithClones = [
    data[data.length - 1],
    ...data,
    data[0]
  ]


  useEffect(() => {
    const carousel = document.querySelector('.js-hero-carousel') as HTMLDivElement;
    setContentWidth(carousel.clientWidth)

    window.addEventListener('resize', () => {
      setContentWidth(carousel.clientWidth)
    })
  }, [])


  useEffect(() => {
    const sliderProps = {
      name: 'hero',
      contentLength: dataWithClones.length,
      intervalTime: 5000
    }
    useSliderTransition(sliderProps);
  }, [])



  return ReactDOM.createPortal(
    (
      <div className='carousel-hero js-hero-carousel' >
        <div className='carousel-hero__overlay flex-container-3'>
          <button className='btn-next-2 left'>
            <i className='left-arrow'></i>
          </button>
          <button className='btn-next-2 right'>
            <i className='right-arrow'></i>
          </button>
        </div>
        <div className='carousel-hero__slider flex js-hero-carousel-slider'>
          {
            dataWithClones.map((datum: any, index: number) => (
              <HeroContent
                key={index}
                imgSrc={datum.imgSrc}
                desc={datum.desc}
                imgWidth={contentWidth} />
            ))
          }
        </div>
      </div >
    ),
    document.getElementById('hero-carousel')!
  );
}

export default HeroCarousel;

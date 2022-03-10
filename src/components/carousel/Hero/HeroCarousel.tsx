import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom'
import useSliderTransition from '@Hooks/useCarouselTransition';
import { HeroContentType } from '@Types/Hero/HeroContentType';
import HeroContent from './Content';

type HeroCarouselProps = {
  data: HeroContentType[]
}

const HeroCarousel = ({ data }: HeroCarouselProps): JSX.Element => {
  const [carouselWidth, setCarouselWidth] = useState(0);
  const dataWithClones = [
    data[data.length - 1],
    ...data,
    data[0]
  ]


  useEffect(() => {
    const carousel = document.querySelector('.carousel-hero');
    setCarouselWidth(carousel ? carousel.clientWidth : 0)

    window.addEventListener('resize', () => {
      setCarouselWidth(carousel ? carousel.clientWidth : 0)
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
        <div className='hide-in-mobile'>
          <button><i className="fas fa-chevron-right"></i></button>
        </div>

        <div className='hide-in-mobile'>
          <button><i className="fas fa-chevron-left"></i></button>
        </div>
        <div className='carousel-hero__slider flex js-hero-carousel-slider'>
          {
            dataWithClones.map((datum: any, index: number) => (
              <HeroContent
                key={index}
                imgSrc={datum.imgSrc}
                desc={datum.desc}
                imgWidth={carouselWidth} />
            ))
          }
        </div>
      </div >
    ),
    document.getElementById('hero-carousel')!
  );
}

export default HeroCarousel;

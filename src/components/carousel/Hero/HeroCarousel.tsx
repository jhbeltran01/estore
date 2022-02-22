import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom'
import useSliderTransition from '@Hooks/useSliderTransition';
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
      carouselName: '.carousel-hero',
      sliderName: '.carousel-hero__slider',
      contentLength: dataWithClones.length,
      intervalTime: 5000
    }

    // useSliderTransition returns a reference to a setInterval function
    const sliderTransition = useSliderTransition(sliderProps);

    return () => {
      clearInterval(sliderTransition);
    }
  }, [carouselWidth])



  return ReactDOM.createPortal(
    (
      <div className='carousel-hero' >
        <div className='hide-in-mobile'>
          <button><i className="fas fa-chevron-right"></i></button>
        </div>

        <div className='hide-in-mobile'>
          <button><i className="fas fa-chevron-left"></i></button>
        </div>
        <div className='carousel-hero__slider flex'>
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

import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom'
import { HeroContentType } from '../../types/HeroContentType';
import Content from './contents/HeroContent';

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
    const carousel = document.querySelector('.carousel-hero') as HTMLDivElement;
    const slider = carousel.querySelector('.carousel-hero__slider') as HTMLDivElement;
    let displayedContent = 1;

    slider.style.transform = `translateX(-${carousel.clientWidth * 1}px)`;

    const sliderTransition = setInterval(() => {
      if (displayedContent < dataWithClones.length - 1) {
        ++displayedContent;
        slider.style.transition = '500ms ease-in-out';
        console.log(carousel.clientWidth, displayedContent);
        slider.style.transform = `translateX(-${carousel.clientWidth * displayedContent}px)`;
      }
    }, 10000)


    slider.addEventListener('transitionend', () => {
      if (displayedContent === dataWithClones.length - 1) {
        slider.style.transition = 'unset';
        slider.style.transform = `translateX(-${carousel.clientWidth * 1}px)`;
        displayedContent = 1;
      }
    })

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
              <Content
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

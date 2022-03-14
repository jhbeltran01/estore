import CarouselOverlay from '@Components/carousel/CarouselOverlay';
import useCarouselTransition from '@Hooks/transitions/useCarouselTransition';
import useSliderTransition from '@Hooks/transitions/useSliderTransition';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import TestimonialContent from './Content';

export type TestimonialType = {
  name: string,
  imgSrc: string,
  imgDesc: string,
  profession: string,
  rating: number,
  testimonial: string
}

type TestimonialSliderProps = {
  testimonials: TestimonialType[]
}

function TestimonialSlider({ testimonials }: TestimonialSliderProps) {
  const [contentWidth, setContentWidth] = useState(0);
  const [testimonialWithClones, setTestimonialWithClones] = useState([testimonials[testimonials.length - 1], ...testimonials, testimonials[0]]);



  useEffect(() => {
    const carousel = document.querySelector('.carousel-testimonial') as HTMLDivElement;
    setContentWidth(carousel.clientWidth);

    window.addEventListener('resize', () => {
      setContentWidth(carousel.clientWidth);
    })
  }, [])



  useEffect(() => {
    const props = {
      name: 'testimonial',
      contentLength: testimonialWithClones.length,
      intervalTime: 5000,
      numberOfClones: 2
    }

    const isForSmallViewport = contentWidth < 768;
    const { slider, sliderInterval, transitionEndHandler } = isForSmallViewport ? useCarouselTransition(props) : useSliderTransition(props);

    return () => {
      clearInterval(sliderInterval);
      slider.removeEventListener('transitionend', transitionEndHandler);
    }
  }, [contentWidth])



  const responsiveWidth = contentWidth >= 768 ? contentWidth / 2 : contentWidth

  return (
    <div className='pad-4'>
      <div className='carousel carousel-testimonial' id='js-testimonial-carousel'>
        <CarouselOverlay />

        <div className='carousel-testimonial__slider flex' id='js-testimonial-slider'>
          {
            testimonialWithClones.map((testimonial: TestimonialType, index: number) =>
              <TestimonialContent
                key={index}
                imgSrc={testimonial.imgSrc}
                imgDesc={testimonial.imgDesc}
                name={testimonial.name}
                rating={testimonial.rating}
                testimonial={testimonial.testimonial}
                profession={testimonial.profession}
                wrapperWidth={responsiveWidth}
              />)
          }
        </div>
      </div>
    </div>
  )
}

export default TestimonialSlider;

import useCarouselTransition from '@Hooks/useCarouselTransition';
import useSliderTransition from '@Hooks/useSliderTransition';
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
    const props = {
      name: 'testimonial',
      contentLength: testimonialWithClones.length,
      intervalTime: 5000,
      numberOfClones: 2
    }

    const isForSmallViewport = contentWidth < 768;
    const transitionHook = isForSmallViewport ? useCarouselTransition(props) : useSliderTransition(props);
    const { slider, sliderInterval, transitionEndHandler } = transitionHook;;

    return () => {
      clearInterval(sliderInterval);
      slider.removeEventListener('transitionend', transitionEndHandler);
    }
  }, [contentWidth])



  useEffect(() => {
    const carousel = document.querySelector('.carousel-testimonial') as HTMLDivElement;
    setContentWidth(carousel.clientWidth);

    window.addEventListener('resize', () => {
      setContentWidth(carousel.clientWidth);
    })
  }, [])



  const responsiveWidth = contentWidth >= 768 ? contentWidth / 2 : contentWidth

  return ReactDOM.createPortal(
    (
      <div className='carousel-testimonial mar-x-2 js-testimonial-carousel'>
        <div className='carousel-testimonial__overlay flex-container-3'>
          <button className='btn-next-2  left'>
            <span className='left-arrow'></span>
          </button>
          <button className='btn-next-2 right'>
            <span className='right-arrow'></span>
          </button>
        </div>

        <div className='carousel-testimonial__slider flex js-testimonial-carousel-slider'>
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
    ),
    document.getElementById('testimonials')!
  );
}

export default TestimonialSlider;
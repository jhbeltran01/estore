import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import TestimonialContent from './Content';
import { TestimonialType } from '@Types/Testimonial/TestimonialType'


type TestimonialCarouselProps = {
  testimonials: TestimonialType[]
}

function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const [carouselWidth, setCarouselWidth] = useState(0)

  useEffect(() => {
    const carousel = document.querySelector('.carousel-testimonial');
    setCarouselWidth(carousel ? carousel.clientWidth : 0)

    window.addEventListener('resize', () => {
      setCarouselWidth(carousel ? carousel.clientWidth : 0)
    })
  }, [])

  return ReactDOM.createPortal(
    (
      <div className='carousel-testimonial mar-x-2'>
        <div className='carousel-testimonial__overlay flex-container-3'>
          <button className='btn-next-2 btn-next-2--left'></button>
          <button className='btn-next-2 btn-next-2--right'></button>
        </div>

        <div className='carousel-testimonial__slider flex'>
          {
            testimonials.map((testimonial: TestimonialType, index: number) =>
              <TestimonialContent
                key={index}
                imgSrc={testimonial.imgSrc}
                imgDesc={testimonial.imgDesc}
                name={testimonial.name}
                rating={testimonial.rating}
                testimonial={testimonial.testimonial}
                profession={testimonial.profession}
                wrapperWidth={carouselWidth}
              />)
          }
        </div>
      </div>
    ),
    document.getElementById('testimonials')!
  );
}

export default TestimonialCarousel;

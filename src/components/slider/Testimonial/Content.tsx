import React from 'react';
import useRating from '@Hooks/useRating'

type TestimonialContentProps = {
  imgSrc: string,
  imgDesc: string,
  name: string,
  profession: string
  testimonial: string
  rating: number,
  wrapperWidth: number
}

function Content({ imgSrc, imgDesc, name, profession, testimonial, rating, wrapperWidth }: TestimonialContentProps) {
  const ratingElement = useRating(rating);
  return (
    <div className='wrapper' style={{ minWidth: wrapperWidth }} id='js-content'>
      <div className='bg-white-2 flex-container-responsive-2'>
        <img className='carousel-testimonial__img' src={imgSrc} alt={imgDesc} />

        <div className='pad-1'>
          <h5 className='carousel-testimonial__name'>{name}</h5>
          <p className='carousel-testimonial__profession'>{profession}</p>
          <div className='mar-bot'>
            {
              ratingElement.map((rating: JSX.Element) => rating)
            }
          </div>
          <p className='carousel-testimonial__desc'>{testimonial}</p>
        </div>
      </div>
    </div>
  );
}

export default Content;

import React, { useEffect } from 'react';

export type HeroContentProps = {
  imgSrc: string,
  desc: string,
  imgWidth: number
}

const Content = ({ imgSrc, desc, imgWidth }: HeroContentProps): JSX.Element => {
  return (
    <div style={{ minWidth: imgWidth }} className='carousel-hero__content'>
      <img className='carousel-hero__img' src={imgSrc} alt="" />
      <div className='carousel-hero__caption grid-center'>
        <div className='carousel-hero__caption-content'>
          <p className='carousel-hero__desc'>{desc}</p>
          <button className='btn-hero'><i className="fa fa-shopping-cart"></i> Shop Now</button>
        </div>
      </div>
    </div>
  );
}

export default Content;

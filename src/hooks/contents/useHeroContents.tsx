import React from 'react'

function useHeroContents(dataWithClones: {}[], contentWidth: number) {
  return (
    dataWithClones.map((datum: any, index: number) => (
      <div style={{ minWidth: contentWidth }} className='carousel-hero__content'>
        <img className='carousel-hero__img' src={datum.imgSrc} alt="" />
        <div className='carousel-hero__caption grid-center'>
          <div className='carousel-hero__caption-content'>
            <p className='carousel-hero__desc'>{datum.desc}</p>
            <button className='btn-hero'><i className="fa fa-shopping-cart"></i> Shop Now</button>
          </div>
        </div>
      </div>
    ))
  )
}

export default useHeroContents
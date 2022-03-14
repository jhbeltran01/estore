import React from 'react'

function CarouselOverlay() {
  return (
    <div className='carousel-overlay flex-container-3'>
      <button className='btn-next-2 left' id='js-arrow-left'>
        <span className='left-arrow'></span>
      </button>
      <button className='btn-next-2 right' id='js-arrow-right'>
        <span className='right-arrow'></span>
      </button>
    </div>
  )
}

export default CarouselOverlay
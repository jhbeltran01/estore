import React from 'react'

type CarouselOverlayProps = {
  name: string
}

function CarouselOverlay({ name }: CarouselOverlayProps) {
  return (
    <div className='overlay flex-container-3'>
      <button className='btn-next-2 left'>
        <span className='left-arrow'></span>
      </button>
      <button className='btn-next-2 right'>
        <span className='right-arrow'></span>
      </button>
    </div>
  )
}

export default CarouselOverlay
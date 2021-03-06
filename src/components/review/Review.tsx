import useRating from '@Hooks/useRating'
import React from 'react'

type ReviewType = {
  name: string,
  date: string,
  rating: number,
  description: string
}


function Review({ name, date, rating, description }: ReviewType) {
  const stars = useRating(rating);

  return (
    <div className='mar-bot-3'>
      <p className='mar-bot-6'>
        <span className='fs-18 clr-light-red fw-600'>{name} - </span>
        <span className='fs-14 clr-gray'>{date}</span>
      </p>

      <div className='mar-bot-6'>
        {stars}
      </div>

      <p>{description}</p>
    </div>
  )
}

export default Review
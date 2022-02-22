import useRating from '@Hooks/useRating'
import ReviewType from '@Types/Review/ReviewType'
import React from 'react'

function Review({ name, date, rating, description }: ReviewType) {
  const stars = useRating(rating);

  return (
    <div>
      <div>
        <p>{name} - <span>{date}</span></p>
      </div>

      <div>
        {
          stars.map((star: JSX.Element) => star)
        }
      </div>

      <p>{description}</p>
    </div>
  )
}

export default Review
import Review from '@Components/review/Review'
import ReviewType from '@Types/Review/ReviewType'
import React from 'react'

type ReviewsTabProps = {
  reviews: ReviewType[]
}

let stars: JSX.Element[] = [];

for (let i = 0; i < 5; ++i) {
  stars.push(<i key={i} className="far fa-star"></i>)
}


const ReviewsTab = ({ reviews }: ReviewsTabProps): JSX.Element => {
  return (
    <div>
      <div>
        {
          reviews.map(({ name, date, rating, description }: ReviewType, index: number) => (
            <Review
              key={index}
              name={name}
              date={date}
              rating={rating}
              description={description}
            />
          ))
        }
      </div>

      <div>
        <h3 className='review__title'>Give Your Review:</h3>
        <div className='review__stars'>{stars}</div>

        <form action="GET">
          <div>
            <input className='input-field-3' type="text" name="name" id="name" placeholder='Name' />
            <input className='input-field-3' type="email" name="email" id="email" placeholder='Email' />
          </div>
          <textarea className='input-field-3' name="review" id="review" placeholder='Review'></textarea>
          <button className='btn-submit-2' type="submit">Submit</button>
        </form>
      </div>
    </div >
  )
}

export default ReviewsTab
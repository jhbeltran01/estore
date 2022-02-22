import Review from '@Components/review/Review'
import ReviewType from '@Types/Review/ReviewType'
import React from 'react'

type ReviewsTabProps = {
  reviews: ReviewType[]
}

let stars: JSX.Element[] = [];

for (let i = 0; i < 5; ++i) {
  stars.push(<i className="far fa-star"></i>)
}


const ReviewsTab = ({ reviews }: ReviewsTabProps): JSX.Element => {
  return (
    <div>
      <div>
        {
          reviews.map(({ name, date, rating, description }: ReviewType) => {
            <Review
              name={name}
              date={date}
              rating={rating}
              description={description}
            />
          })
        }
      </div>

      <div>
        <h3>Give Your Review</h3>
        <div>{stars}</div>

        <form action="GET">
          <div>
            <input type="text" name="name" id="name" placeholder='Name' />
            <input type="email" name="email" id="email" placeholder='Email' />
          </div>
          <textarea name="review" id="review" placeholder='Review'></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div >
  )
}

export default ReviewsTab
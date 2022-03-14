import React from "react";

const useRating = (rating: number): JSX.Element[] => {
  const stars: JSX.Element[] = []

  for (let i = 0; i < rating; ++i) {
    stars.push(<i key={i} className="active-star fa fa-star" > </i>)
  }

  for (let i = rating; i < 5; ++i) {
    stars.push(<i key={i} className="disabled-star fa fa-star" > </i>)
  }

  return stars;
}

export default useRating;
import React from "react";

const useRating = (rating: number): JSX.Element[] => {
  const stars: JSX.Element[] = []

  for (let i = 0; i < rating; ++i) {
    stars.push(<i key={i} className="star fa fa-star" > </i>)
  }

  return stars;
}

export default useRating;
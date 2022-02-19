import React from 'react';
import useRating from '../../../hooks/useRating';

type ProductsContentProps = {
  imgSrc: string,
  name: string,
  rating: number,
  prize: number,
  cardWidth: number
}

function ProductsContent({ imgSrc, name, rating, prize, cardWidth }: ProductsContentProps) {
  const stars: JSX.Element[] = useRating(rating);

  let responsiveWidth = 0;

  const isMediumViewport: boolean = cardWidth >= 736;
  const isLargeViewport: boolean = cardWidth >= 992;

  if (isLargeViewport) {
    responsiveWidth = cardWidth / 4;
  } else if (isMediumViewport) {
    responsiveWidth = cardWidth / 3;
  } else {
    responsiveWidth = cardWidth;
  }

  return (
    <div className='wrapper-2' style={{ minWidth: responsiveWidth }}>
      <div className='card'>
        <div className='card__content'>
          <h2 className='card__title'>{name}</h2>
          {
            stars.map((star: JSX.Element) => star)
          }
        </div>

        <div className='pos-relative'>
          <img className='card__img' src={imgSrc} alt="" />
          <div className='card__overlay grid-center'>
            <div className='card__call-to-action'>
              <button className='btn-action'><i className="fa fa-cart-plus"></i></button>
              <button className='btn-action'><i className="fa fa-heart"></i></button>
              <button className='btn-action'><i className="fa fa-search"></i></button>
            </div>
          </div>
        </div>

        <div className='card__content flex-container-2'>
          <div>$<span className='card__prize'>{prize}</span></div>
          <button className='btn-secondary'>
            <i className="fa fa-shopping-cart"></i>
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductsContent;

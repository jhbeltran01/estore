import React from 'react';
import useRating from '@Hooks/useRating';
import ProductsContentProps from '@Types/Products/ProductContentProps';



function ProductsContent({ imgSrc, name, rating, prize, cardWidth, isForCarousel }: ProductsContentProps) {
  const stars: JSX.Element[] = useRating(rating);

  return (
    <div className='wrapper-2 js-carousel-content' style={isForCarousel ? { minWidth: cardWidth } : {}}>
      <div className='card'>
        <div className='card__content'>
          <h2 className='card__title'>{name}</h2>
          {
            stars.map((star: JSX.Element) => star)
          }
        </div>

        <div className='pos-relative'>
          <div className='overflow-hidden-2'>
            <img className='card__img' src={imgSrc} alt="" />
          </div>
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

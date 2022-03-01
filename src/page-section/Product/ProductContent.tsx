import CustomNumber from '@Components/elements/number/CustomNumber';
import CustomOptions from '@Components/elements/options/CustomOptions';
import useRating from '@Hooks/useRating'
import ProductType from '@Types/Products/ProductType'
import React from 'react'

const sizeOptions = ['S', 'M', 'L', 'XL']
const colorOptions = ['White', 'Black', 'Blue']

const ProductContent = ({ imgSrc, name, rating, prize, id }: ProductType) => {
  const stars = useRating(rating);

  return (
    <div>
      <h2 className='product-detail__name'>{name}</h2>

      <div className='mar-bot-2'>
        {
          stars.map((star: JSX.Element) => star)
        }
      </div>

      <div className='grid-2-column-1 mar-bot-5'>
        <p className='product-detail__label'>Price:</p>
        <p className='product-detail__prize'>${prize}</p>
      </div>

      <div className='grid-2-column-1 mar-bot-5'>
        <p className='product-detail__label'>Quantity:</p>
        <CustomNumber updateTotal={undefined} updatePrice={undefined} />
      </div>

      <div className='grid-2-column-1 mar-bot-5'>
        <p className='product-detail__label'>Size</p>
        <CustomOptions options={sizeOptions} />
      </div>

      <div className='mar-bot-5'>
        <p className='product-detail__label'>Color:</p>
        <CustomOptions options={colorOptions} />
      </div>

      <div>
        <button className='btn-primary fs-16 mar-bot mar-right'>
          <i className='fa fa-shopping-cart'></i>
          Add to Cart
        </button>
        <button className='btn-primary fs-16'>
          <i className="fa fa-shopping-bag"></i>
          Buy Now
        </button>
      </div>
    </div>
  )
}

export default ProductContent
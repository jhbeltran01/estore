import CustomNumber from '@Components/elements/number/CustomNumber';
import CustomOptions from '@Components/elements/options/CustomOptions';
import useRating from '@Hooks/useRating'
import React from 'react'

type ProductType = {
  name: string,
  rating: number,
  prize: number,
  sizes: string[],
  colors: string[]
}

const sizeOptions = ['S', 'M', 'L', 'XL']
const colorOptions = ['White', 'Black', 'Blue']

const ProductContent = ({ name, rating, prize, sizes, colors }: ProductType) => {
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
        <CustomOptions options={sizes} />
      </div>

      <div className='mar-bot-5 grid-2-column-1'>
        <p className='product-detail__label'>Color:</p>
        <CustomOptions options={colors} />
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
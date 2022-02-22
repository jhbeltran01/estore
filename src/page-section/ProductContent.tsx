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
      <h2>{name}</h2>
      <div>
        {
          stars.map((star: JSX.Element) => star)
        }
      </div>

      <div>
        <p>Price:</p>
        <p>{prize}</p>
      </div>

      <div>
        <p>Quantity:</p>
        <CustomNumber />
      </div>

      <div>
        <p>Size</p>
        <CustomOptions options={sizeOptions} />
      </div>

      <div>
        <p>Color</p>
        <CustomOptions options={colorOptions} />
      </div>

      <div>
        <button>
          <i className='fa fa-shopping-cart'></i>
          Add to Cart
        </button>
        <button>
          <i className="fa fa-shopping-bag"></i>
          Buy Now
        </button>
      </div>
    </div>
  )
}

export default ProductContent
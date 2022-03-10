import React from 'react'

type ProductColProps = {
  image: string,
  name: string
}

const ProductCol = ({ image, name }: ProductColProps): JSX.Element => {
  return (
    <div className='flex-container-6'>
      <img src={image} alt="product image" />
      <p>{name}</p>
    </div>
  )
}

export default ProductCol
import React from 'react'

type ProductColType = {
  image: string,
  name: string
}

const ProductCol = ({ image, name }: ProductColType): JSX.Element => {
  return (
    <div className='flex-container-6'>
      <img src={image} alt="product image" />
      <p>{name}</p>
    </div>
  )
}

export default ProductCol
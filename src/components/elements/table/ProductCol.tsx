import React from 'react'

type ProductColType = {
  image: string,
  name: string
}

const ProductCol = ({ image, name }: ProductColType): JSX.Element => {
  return (
    <React.Fragment>
      <img src={image} alt="product image" />
      <p>{name}</p>
    </React.Fragment>
  )
}

export default ProductCol
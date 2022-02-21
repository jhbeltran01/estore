import React, { useState } from 'react'
import Select from '../Select/Select'

const ProductRange = (): JSX.Element => {
  let productPriceRange: string[] = [];

  for (let i = 0; i < 500; i += 50) {
    const rangeStart = i != 0 ? i + 1 : 0;
    productPriceRange.push(`${rangeStart} - ${i + 50}`);
  }

  return (
    <button>
      <span>Product price range</span>
      <Select options={productPriceRange!} />
    </button>
  )
}

export default ProductRange
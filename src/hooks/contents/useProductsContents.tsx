import React from 'react'
import ProductsContent from '@Components/slider/Products/Content'

function useProductsContents(productsWithClones: {}[], contentWidth: number) {
  return (
    productsWithClones.map((datum: any, index: number) =>
      <ProductsContent
        key={index}
        imgSrc={datum.imgSrc}
        name={datum.name}
        rating={datum.rating}
        prize={datum.prize}
        cardWidth={contentWidth}
      />
    )
  )
}

export default useProductsContents
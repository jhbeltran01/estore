import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import products from '../json/products.json'
import Pagination from './pagination/Pagination';
import ProductsContent from './slider/contents/ProductsContent';

type ProductsPagination = {
  numberOfItemPerPage: number
}

function ProductsPagination({ numberOfItemPerPage }: ProductsPagination) {
  const [productsToBeDisplayed, setProductsToBeDisplayed] = useState(products.slice(0, numberOfItemPerPage));



  const updateProductsToBeDisplayed = (pageNumber: number, isPrevious: boolean): void => {
    const start = pageNumber === 1 ? 0 : numberOfItemPerPage * (pageNumber - 1);
    const last = isPrevious ? numberOfItemPerPage * pageNumber : numberOfItemPerPage * pageNumber;

    setProductsToBeDisplayed(products.slice(start, last));
  }



  return ReactDOM.createPortal(
    (
      <div>
        <div>
          {
            productsToBeDisplayed.map((product) => {
              return <ProductsContent
                key={product.id}
                imgSrc={product.imgSrc}
                name={product.name}
                prize={product.prize}
                rating={product.rating}
                cardWidth={0}
                isForCarousel={true}
              />
            })
          }
        </div>

        <Pagination
          updateContentToBeDisplayed={updateProductsToBeDisplayed}
          numberOfPage={Math.ceil(products.length / numberOfItemPerPage)}
        />
      </div>
    ),
    document.getElementById('products-pagination')!
  )
}

export default ProductsPagination
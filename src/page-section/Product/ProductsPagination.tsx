import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Pagination from '@Components/pagination/Pagination';
import ProductsContent from '@Components/slider/Products/Content';

type ProductsPagination = {
  numberOfItemPerPage: number,
  products: any[]
}

function ProductsPagination({ numberOfItemPerPage, products }: ProductsPagination) {
  const [productsToBeDisplayed, setProductsToBeDisplayed] = useState(products.slice(0, numberOfItemPerPage));



  const updateProductsToBeDisplayed = (pageNumber: number, isPrevious: boolean): void => {
    const start = pageNumber === 1 ? 0 : numberOfItemPerPage * (pageNumber - 1);
    const last = isPrevious ? numberOfItemPerPage * pageNumber : numberOfItemPerPage * pageNumber;

    setProductsToBeDisplayed(products.slice(start, last));
  }



  return ReactDOM.createPortal(
    (
      <div className='product-view'>
        <div className='product-view__content grid-3-column-responsive'>
          {
            productsToBeDisplayed.map((product) => (
              <ProductsContent
                key={product.id}
                imgSrc={product.imgSrc}
                name={product.name}
                prize={product.prize}
                rating={product.rating}
                cardWidth={0}
              />
            ))
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
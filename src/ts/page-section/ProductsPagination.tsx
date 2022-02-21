import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Pagination from '../components/pagination/Pagination';
import ProductsContent from '../components/slider/Products/ProductsContent';

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
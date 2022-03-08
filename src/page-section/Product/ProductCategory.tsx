import React from 'react';
import ReactDOM from 'react-dom'
import ProductsSlider from '@Components/slider/Products/ProductsSlider';

export type ProductCategoryProps = {
  productCategory: string,
  products: any,
  name: string
}

function ProductCategory({ productCategory, products, name }: ProductCategoryProps): JSX.Element {
  return (
    <div className='section'>
      <div className='section__header'>
        <div className='pad-3 flex-container-3'>
          <h1 className='section__title'>{productCategory}</h1>
          <div className='flex'>
            <div><button className='btn-next'><i className="fas fa-chevron-right"></i></button></div>
            <div><button className='btn-next'><i className="fas fa-chevron-left"></i></button></div>
          </div>
        </div>
      </div>

      <ProductsSlider products={products} name={name} />
    </div>
  )
}

export default ProductCategory;

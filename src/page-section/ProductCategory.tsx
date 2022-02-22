import React from 'react';
import ReactDOM from 'react-dom'
import ProductsSlider from '@Components/slider/Products/ProductsSlider';
import { ProductCategoryProps } from '@Types/Products/ProductCategoryProps';

function ProductCategory({ productCategory, targetElement, products }: ProductCategoryProps) {
  return ReactDOM.createPortal(
    (
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

        <ProductsSlider products={products} />
      </div>
    ),
    document.getElementById(targetElement)!
  );
}

export default ProductCategory;

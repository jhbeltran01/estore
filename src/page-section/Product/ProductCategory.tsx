import React from 'react';

export type ProductCategoryProps = {
  productCategory: string,
  children: JSX.Element
}

function ProductCategory({ productCategory, children }: ProductCategoryProps): JSX.Element {
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

      {children}
    </div>
  )
}

export default ProductCategory;

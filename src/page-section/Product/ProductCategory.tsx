import React from 'react';

export type ProductCategoryProps = {
  productCategory: string,
  name: string,
  children: JSX.Element
}

function ProductCategory({ productCategory, name, children }: ProductCategoryProps): JSX.Element {
  return (
    <div className='section' id={`js-${name}-container`} >
      <div className='section__header'>
        <div className='pad-3 flex-container-3'>
          <h1 className='section__title'>{productCategory}</h1>
          <div className='flex'>
            <div>
              <button className='btn-next' id='js-arrow-left'>
                <span className='left-arrow'></span>
              </button>
            </div>
            <div>
              <button className='btn-next' id='js-arrow-right'>
                <span className='right-arrow'></span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {children}
    </div>
  )
}

export default ProductCategory;

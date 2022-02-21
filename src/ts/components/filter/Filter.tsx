import React from 'react'
import ReactDOM from 'react-dom';
import ProductRange from '../elements/Products/ProductRange';
import ProductSort from '../elements/Products/ProductSort';
import Search2 from '../elements/Searchs/Search2';

const Filter = (): JSX.Element => {

  return ReactDOM.createPortal(
    (
      <div>
        <Search2 />

        <ProductSort />

        <ProductRange />

      </div>
    ),
    document.getElementById('filter')!);
}

export default Filter
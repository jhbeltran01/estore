import React from 'react'
import ReactDOM from 'react-dom';
import ProductRange from '../elements/ProductRange';
import ProductSort from '../elements/ProductSort';
import Search2 from '../elements/Search2';

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
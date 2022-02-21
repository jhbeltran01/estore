import React from 'react'
import ReactDOM from 'react-dom'
import Filter from './components/filter/Filter';
import Header from './components/header/Header'
import ProductsPagination from './components/ProductsPagination';
import ProductsSlider from './components/slider/Products/ProductsSlider';
import products from './json/products.json';

function App() {
  return (
    <React.Fragment>
      <Header />

      <Filter />

      <ProductsPagination numberOfItemPerPage={9} />

      <ProductsSlider />
    </React.Fragment>
  )
}


ReactDOM.render(<App />, document.getElementById("root"));
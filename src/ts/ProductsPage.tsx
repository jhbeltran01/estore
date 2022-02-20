import React from 'react'
import ReactDOM from 'react-dom'
import Filter from './components/filter/Filter';
import Header from './components/header/Header'
import ProductsPagination from './components/ProductsPagination';
import products from './json/products.json';

function App() {
  return (
    <React.Fragment>
      <Header />

      <Filter />

      <ProductsPagination numberOfItemPerPage={9} />
    </React.Fragment>
  )
}


ReactDOM.render(<App />, document.getElementById("root"));
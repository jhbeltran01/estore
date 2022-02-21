import React from 'react'
import ReactDOM from 'react-dom'
import Filter from '../components/filter/Filter';
import Header from '../components/header/Header'
import ProductsPagination from '../page-section/ProductsPagination';
import ProductsSlider from '../components/slider/Products/ProductsSlider';
import products from '../json/products.json';
import Tags from '../components/tags/Tags';

const tags = ['Lorem ipsum', 'Vivamus', 'Phasellus', 'pulvinar', 'Curabitur', 'Fusce',
  'Sem quis', 'Mollis metus', 'Sit amet', 'Vel posuere', 'orci luctus', 'Nam lorem']

function App() {
  return (
    <React.Fragment>
      <Header />

      <Filter />

      <ProductsPagination numberOfItemPerPage={9} />

      {
        ReactDOM.createPortal(<ProductsSlider products={products} />, document.getElementById('products-slider')!)
      }

      {
        ReactDOM.createPortal(<Tags tags={tags} />, document.getElementById('tags')!)
      }
    </React.Fragment>
  )
}


ReactDOM.render(<App />, document.getElementById("root"));
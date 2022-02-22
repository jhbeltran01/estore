import React from 'react'
import ReactDOM from 'react-dom'
import Filter from '@Components/filter/Filter';
import Header from '@Components/header/Header'
import ProductsPagination from '@Page-section/ProductsPagination';
import ProductsSlider from '@Components/slider/Products/ProductsSlider';
import products from '@Json/products.json';
import Tags from '@Components/tags/Tags';
import "@Utils/toggleMobileNavMenu";
import tags from "@Json/tags.json";

function App() {
  return (
    <React.Fragment>
      <Header />

      <Filter />

      <ProductsPagination numberOfItemPerPage={9} products={products} />

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
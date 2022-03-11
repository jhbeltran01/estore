import React from 'react'
import ReactDOM from 'react-dom'
import Filter from '@Components/filter/Filter';
import Header from '@Components/header/Header'
import ProductsPagination from '@Page-section/Product/ProductsPagination';
import ProductsSlider from '@Components/slider/Products/ProductsSlider';
import products from '@Json/products.json';
import Tags from '@Components/tags/Tags';
import "@Utils/toggleMobileNavMenu";
import tags from "@Json/tags.json";

function App() {
  return (
    <React.Fragment>
      {
        ReactDOM.createPortal(
          <Header />,
          document.getElementById('search-bar')!
        )
      }

      <Filter />

      <ProductsPagination numberOfItemPerPage={9} products={products} />

      {
        ReactDOM.createPortal(<ProductsSlider products={products} name="featured" />, document.getElementById('products-slider')!)
      }

      {
        ReactDOM.createPortal(<Tags tags={tags} />, document.getElementById('tags')!)
      }
    </React.Fragment>
  )
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
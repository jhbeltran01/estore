import ImageCarousel from '@Components/carousel/ProductsDetail/ImageCarousel'
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import products from '@Json/products.json';
import ImageSlider from '@Components/slider/ProductsDetail/ImageSlider';
import ProductContent from '@Page-section/ProductContent';
import Tabs from '@Components/tabs/Tab1/Tabs';
import ProductCategory from '@Page-section/ProductCategory';
import ProductsSlider from '@Components/slider/Products/ProductsSlider';
import Tags from '@Components/tags/Tags';
import tags from "@Json/tags.json"; import useTabs from '@Hooks/useTabs';

const images = products.map(product => product.imgSrc);
const recentProducts = products.filter(product => product.category === 'recent')

function ProductsDetail() {
  const [tabs, setTabs] = useState(useTabs(products[0]));

  return (
    <div className='product-detail'>
      <div className='product-detail__content mar'>
        <div>
          <div>
            <ImageCarousel images={images} />
            <ImageSlider images={images} />
          </div>

          <ProductContent
            imgSrc={products[0].imgSrc}
            name={products[0].name}
            rating={products[0].rating}
            prize={products[0].prize}
            id={products[0].id}
          />
        </div>

        <Tabs productTabs={tabs} />
        <div>tabs</div>
      </div>
      <ProductCategory productCategory='Recent Products' products={recentProducts} />

      {
        ReactDOM.createPortal(<ProductsSlider products={products} />, document.getElementById('products-slider')!)
      }

      {
        ReactDOM.createPortal(<Tags tags={tags} />, document.getElementById('tags')!)
      }
    </div>
  )
}


ReactDOM.render(<ProductsDetail />, document.getElementById('product-detail')!)

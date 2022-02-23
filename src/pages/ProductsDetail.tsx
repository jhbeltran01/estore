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
    <React.StrictMode>
      <div className='product-detail mar'>
        <div>
          <div className='bg-white-2 pad-9'>
            <div>
              <div className='mar-bot-3'>
                <ImageCarousel images={images} />
              </div>
              <div className='border-red mar-y'>
                <ImageSlider images={images} />
              </div>
            </div>

            <ProductContent
              imgSrc={products[0].imgSrc}
              name={products[0].name}
              rating={products[0].rating}
              prize={products[0].prize}
              id={products[0].id}
            />
          </div>

          <div className='mar-y-2'>
            <Tabs productTabs={tabs} />
          </div>
        </div>

        <ProductCategory productCategory='Recent Products' products={recentProducts} />
      </div>

      {
        ReactDOM.createPortal(
          <ProductsSlider products={products} />,
          document.getElementById('products-slider')!
        )
      }

      {
        ReactDOM.createPortal(
          <Tags tags={tags} />,
          document.getElementById('tags')!
        )
      }
    </React.StrictMode>
  )
}


ReactDOM.render(
  <React.StrictMode>
    <ProductsDetail />
  </React.StrictMode>,
  document.getElementById('product-detail')!
)

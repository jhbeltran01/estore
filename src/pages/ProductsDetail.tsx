import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import ImageCarousel from '@Components/carousel/ProductsDetail/ImageCarousel'
import ImageSlider from '@Components/slider/ProductsDetail/ImageSlider';
import Tabs from '@Components/tabs/ProductDetailsTab/Tabs';
import Tags from '@Components/tags/Tags';
import Header from '@Components/header/Header';
import RelatedProductsSlider from '@Components/slider/ProductsDetail/RelatedProductsSlider';
import products from '@Json/products.json';
import tags from "@Json/tags.json";
import ProductContent from '@Page-section/Product/ProductContent';
import ProductCategory from '@Page-section/Product/ProductCategory';
import useProductDetailsTabs from '@Hooks/tabs/useProductDetailsTabs';
import Carousel from '@Components/carousel/Carousel';
import useProductsContents from '@Hooks/useProductsContents';

const images = products.map(product => product.imgSrc);
const recentProducts = products.filter(product => product.category === 'recent')

function ProductsDetail() {
  const [tabs, setTabs] = useState(useProductDetailsTabs(products[0]));

  return (
    <React.Fragment>
      {
        ReactDOM.createPortal(
          <Header />,
          document.getElementById('search-bar')!
        )
      }

      <div className='product-detail mar grid'>
        <div>
          <div className='bg-white-2 grid-2-column-responsive-6'>
            <div>
              <div className='mar-bot-3'>
                <ImageCarousel images={images} />
              </div>
              <div className='border-red mar overflow-hidden'>
                <ImageSlider images={images} />
              </div>
            </div>

            <div className='grid grid-align-center pad-2'>
              <ProductContent
                imgSrc={products[0].imgSrc}
                name={products[0].name}
                rating={products[0].rating}
                prize={products[0].prize}
                id={products[0].id}
              />
            </div>
          </div>

          <div className='mar-y-2'>
            <Tabs productTabs={tabs} />
          </div>
        </div>

        <div className='overflow-hidden'>
          <ProductCategory productCategory='Related Products'>
            <RelatedProductsSlider products={products} name="related" />
          </ProductCategory>
        </div>
      </div>

      {
        ReactDOM.createPortal(
          (
            <Carousel
              name='products'
              data={products}
              contentsHook={useProductsContents}
            />
          ),
          document.getElementById('products-slider')!
        )
      }

      {
        ReactDOM.createPortal(
          <Tags tags={tags} />,
          document.getElementById('tags')!
        )
      }
    </React.Fragment>
  )
}


ReactDOM.render(
  <React.StrictMode>
    <ProductsDetail />
  </React.StrictMode>,
  document.getElementById('product-detail')!
)

import React, { useRef } from "react";
import ReactDOM from "react-dom";
import HeroCarousel from "@Components/carousel/Hero/HeroCarousel";
import Header from "@Components/header/Header";
import ProductCategory from "@Page-section/Product/ProductCategory";
import TestimonialSlider from "@Components/slider/Testimonial/TestimonialSlider";
import carouselContent from '@Json/carousel-content.json'
import products from '@Json/products.json';
import testimonials from '@Json/testimonials.json'
import "@Utils/toggleMobileNavMenu";
import ProductsSlider from "@Components/slider/Products/ProductsSlider";

export const ProductsJSON = React.createContext([{}]);

const featuredProducts = products.filter(product => product.category === 'featured')
const recentProducts = products.filter(product => product.category === 'recent');

const App = (): JSX.Element => {
  return (
    <React.Fragment>
      {
        ReactDOM.createPortal(
          <Header />,
          document.getElementById('search-bar')!
        )
      }

      {
        ReactDOM.createPortal(
          <HeroCarousel data={carouselContent} />,
          document.getElementById('hero-carousel')!
        )
      }

      {
        ReactDOM.createPortal(
          (
            <ProductCategory productCategory='Featured Products'>
              <ProductsSlider products={featuredProducts} name='featured' />
            </ProductCategory>
          ),
          document.getElementById('featured-products')!
        )
      }

      {
        ReactDOM.createPortal(
          (
            <ProductCategory productCategory='Recent Products'>
              <ProductsSlider products={recentProducts} name='recent' />
            </ProductCategory>
          ),
          document.getElementById('recent-products')!
        )
      }

      {
        ReactDOM.createPortal(
          <TestimonialSlider testimonials={testimonials} />,
          document.getElementById('testimonials')!
        )
      }
    </React.Fragment>
  )
}

ReactDOM.render(<App />, document.getElementById("root"));
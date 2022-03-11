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

      <HeroCarousel data={carouselContent} />

      {
        ReactDOM.createPortal(
          (
            <ProductCategory
              productCategory='Featured Products'
              products={featuredProducts}
              name='featured'
            />
          ),
          document.getElementById('featured-products')!
        )
      }

      {
        ReactDOM.createPortal(
          <ProductCategory
            productCategory='Recent Products'
            products={recentProducts}
            name='recent' />,
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
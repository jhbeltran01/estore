import React, { useRef } from "react";
import ReactDOM from "react-dom";
import HeroCarousel from "@Components/carousel/Hero/HeroCarousel";
import Header from "@Components/header/Header";
import ProductCategory from "@Page-section/ProductCategory";
import TestimonialCarousel from "@Components/carousel/Testimonial/TestimonialCarousel";
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
      <Header />
      <HeroCarousel data={carouselContent} />

      {
        ReactDOM.createPortal(
          (
            <ProductCategory
              productCategory='Featured Products'
              products={featuredProducts} />
          ),
          document.getElementById('featured-products')!
        )
      }

      {
        ReactDOM.createPortal(
          <ProductCategory
            productCategory='Recent Products'
            products={featuredProducts} />,
          document.getElementById('recent-products')!
        )
      }

      <TestimonialCarousel testimonials={testimonials} />
    </React.Fragment>
  )
}

ReactDOM.render(<App />, document.getElementById("root"));
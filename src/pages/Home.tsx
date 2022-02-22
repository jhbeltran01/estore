import React, { useRef } from "react";
import ReactDOM from "react-dom";
import HeroCarousel from "@Components/carousel/Hero/HeroCarousel";
import Header from "@Components/header/Header";
import ProductCategory from "@Page-section/ProductCategory";
import TestimonialCarousel from "@Components/carousel/Testimonial/TestimonialCarousel";
import carouselContent from '@Json/carousel-content.json'
import products from '@Json/products.json';
import testimonials from '@Json/testimonials.json'

export const ProductsJSON = React.createContext([{}]);

const featuredProducts = products.filter(product => product.category === 'featured')
const recentProducts = products.filter(product => product.category === 'recent');

const App = (): JSX.Element => {
  return (
    <React.Fragment>
      <Header />
      <HeroCarousel data={carouselContent} />

      <ProductCategory productCategory='Featured Products' products={featuredProducts} targetElement='featured-products' />

      <ProductCategory productCategory='Recent Products' products={featuredProducts} targetElement='recent-products' />

      <TestimonialCarousel testimonials={testimonials} />
    </React.Fragment>
  )
}

ReactDOM.render(<App />, document.getElementById("root"));
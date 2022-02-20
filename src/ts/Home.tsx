import React, { useRef } from "react";
import ReactDOM from "react-dom";
import HeroCarousel from "./components/carousel/HeroCarousel";
import Header from "./components/header/Header";
import ProductCategory from "./components/ProductCategory";
import TestimonialCarousel from "./components/carousel/TestimonialCarousel";
import carouselContent from './json/carousel-content.json'
import products from './json/products.json';
import testimonials from './json/testimonials.json'

export const Products = React.createContext([{}]);

const featuredProducts = products.filter(product => product.category === 'featured')
const recentProducts = products.filter(product => product.category === 'recent');

const App = (): JSX.Element => {
  return (
    <React.Fragment>
      <Header />
      <HeroCarousel data={carouselContent} />

      <Products.Provider value={featuredProducts}>
        <ProductCategory productCategory='Featured Products' targetElement='featured-products' />
      </Products.Provider>

      <Products.Provider value={recentProducts}>
        <ProductCategory productCategory='Recent Products' targetElement='recent-products' />
      </Products.Provider>

      <TestimonialCarousel testimonials={testimonials} />
    </React.Fragment>
  )
}

ReactDOM.render(<App />, document.getElementById("root"));
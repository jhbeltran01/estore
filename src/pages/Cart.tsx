import Header from '@Components/header/Header'
import CartTable from '@Page-section/Cart/CartTable'
import React from 'react'
import ReactDOM from 'react-dom'
import products from "@Json/products.json";
import CartSummary from '@Page-section/Cart/CartSummary';
import "@Utils/toggleMobileNavMenu";

const productsDataForCart = products.map(product => {
  return {
    imgSrc: product.imgSrc,
    name: product.name,
    price: product.prize
  }
})

const Cart = (): JSX.Element => {
  return (
    <React.StrictMode>
      {
        ReactDOM.createPortal(
          <Header />,
          document.getElementById('search-bar')!
        )
      }

      <div className='grid-2-column-responsive-5 pad-8'>
        <div className='overflow-scroll mar pad-10 bg-white-2'>
          <CartTable products={productsDataForCart} />
        </div>
        <div className='mar pad-2 bg-white-2 height-m-content'>
          <CartSummary subtotal={0} shippingCost={1} />
        </div>
      </div>
    </React.StrictMode>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Cart />
  </React.StrictMode>,
  document.getElementById('root')
)
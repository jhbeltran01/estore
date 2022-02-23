import Header from '@Components/header/Header'
import CartTable from '@Page-section/Cart/CartTable'
import React from 'react'
import ReactDOM from 'react-dom'
import products from "@Json/products.json";
import CartSummary from '@Page-section/Cart/CartSummary';

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

      <div>
        <CartTable products={productsDataForCart} />
        <CartSummary subtotal={0} shippingCost={1} />
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
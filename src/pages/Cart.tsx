import Header from '@Components/header/Header'
import CartTable from '@Page-section/Cart/CartTable'
import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import products from "@Json/products.json";
import CartSummary from '@Page-section/Cart/CartSummary';
import "@Utils/toggleMobileNavMenu";

const productsDataForCart = products.filter(product =>
  product.category === 'featured'
).map(product => {
  return {
    id: product.id,
    imgSrc: product.imgSrc,
    name: product.name,
    price: product.prize
  }
})

export const UpdateSubTotalContext = React.createContext(((price: number) => { }));

const Cart = (): JSX.Element => {
  const [subTotal, setSubTotal] = useState(0);

  const updateSubTotal = (price: number): void => {
    setSubTotal(subTotal + price)
  }


  return (
    <React.Fragment>
      {
        ReactDOM.createPortal(
          <Header />,
          document.getElementById('search-bar')!
        )
      }

      <div className='grid-2-column-responsive-5 pad-8'>
        <div className='overflow-scroll mar pad-10 bg-white-2'>
          <UpdateSubTotalContext.Provider value={updateSubTotal}>
            <CartTable products={productsDataForCart} />
          </UpdateSubTotalContext.Provider>
        </div>
        <div className='mar pad-2 bg-white-2 height-m-content'>
          <CartSummary subtotal={subTotal} shippingCost={1} />
        </div>
      </div>
    </React.Fragment>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Cart />
  </React.StrictMode>,
  document.getElementById('root')
)
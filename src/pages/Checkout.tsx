import React from 'react';
import ReactDOM from 'react-dom';
import '@Utils/toggleMobileNavMenu';
import Header from '@Components/header/Header';
import Address from '@Page-section/Checkout/Address';
import Checkbox from '@Components/elements/checkbox/Checkbox';
import CheckoutSummary from '@Page-section/Checkout/CheckoutSummary';
import PaymentMethods from '@Page-section/Checkout/PaymentMethods';

const Checkout = (): JSX.Element => {
  return (
    <React.Fragment>
      {
        ReactDOM.createPortal(
          <Header />,
          document.getElementById('search-bar')!
        )
      }

      <div>
        <div>
          <Address title='Billing' />

          <Checkbox name='sign-in' label='Create an account' />
          <Checkbox name='shipping-address' label='Ship to different address' />

          {/* <Address title='Shipping' /> */}
        </div>

        <div>
          <CheckoutSummary name='Product Name 1' subtotal={99} shippingFee={1} />
          <PaymentMethods />
        </div>

        <button>Place Order</button>
      </div>
    </React.Fragment>
  )
}


ReactDOM.render(
  <React.StrictMode>
    <Checkout />
  </React.StrictMode>,
  document.getElementById('root')
)
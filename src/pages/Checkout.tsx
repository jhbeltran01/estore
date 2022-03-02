import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import '@Utils/toggleMobileNavMenu';
import Header from '@Components/header/Header';
import Address from '@Page-section/Checkout/Address';
import Checkbox from '@Components/elements/checkbox/Checkbox';
import CheckoutSummary from '@Page-section/Checkout/CheckoutSummary';
import PaymentMethods from '@Page-section/Checkout/PaymentMethods';

const Checkout = (): JSX.Element => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [toShipInDifferentAddress, setToShipInDifferentAddress] = useState(false)
  const [willCreateAnAccount, setWillCreateAnAccount] = useState(false)
  const [shippingAddressFormHeight, setShippingAddressFormHeight] = useState(0)

  const updatePaymentMethod = (value: string) => {
    setPaymentMethod(value)
  }


  const updateToShipInDifferentAddress = (event: React.ChangeEvent<HTMLInputElement>) => {
    setToShipInDifferentAddress(event.currentTarget.checked)
  }

  const updateWillCreateAnAccount = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWillCreateAnAccount(event.currentTarget.checked)
  }

  useEffect(() => {
    const shippingAddress = document.getElementById('shipping-address-form')!;
    setShippingAddressFormHeight(shippingAddress.clientHeight);

    window.addEventListener('resize', () => {
      setShippingAddressFormHeight(shippingAddress.clientHeight);
    })
  }, [])


  return (
    <React.Fragment>
      {
        ReactDOM.createPortal(
          <Header />,
          document.getElementById('search-bar')!
        )
      }

      <div className='grid-2-column-responsive-5'>
        <div className='checkout'>
          <Address title='Billing' />

          <div className='mar-bot-6'>
            <Checkbox
              name='sign-in'
              label='Create an account'
              updateValue={updateWillCreateAnAccount}
            />
          </div>

          <Checkbox
            name='shipping-address'
            label='Ship to different address'
            updateValue={updateToShipInDifferentAddress}
          />

          <div
            className='mar-top-2 overflow-hidden-2 transition-1'
            style={toShipInDifferentAddress ? { height: `${shippingAddressFormHeight}px` } : { height: '0' }}
          >
            <div id='shipping-address-form'>
              <Address title='Shipping' />
            </div>
          </div>
        </div>

        <div className='checkout'>
          <CheckoutSummary name='Product Name 1' subtotal={99} shippingFee={1} />
          <PaymentMethods updatePayment={updatePaymentMethod} />

          <button disabled={paymentMethod === ''} className='btn-order mar-top-2'>Place Order</button>
        </div>
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
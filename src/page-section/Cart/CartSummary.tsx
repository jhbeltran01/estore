import React from 'react'
import Coupon from './Coupon'
import Summary from './Summary'

type CartSummaryProps = {
  subtotal: number,
  shippingCost: number
}

const CartSummary = ({ subtotal, shippingCost }: CartSummaryProps): JSX.Element => {
  return (
    <div>
      <Coupon />

      <Summary subtotal={subtotal} shippingCost={shippingCost} />

      <div className='grid-2-column-2 mar-top-1'>
        <button className='btn-primary min-height-50'>Update Cart</button>
        <button className='btn-3 min-height-50'>Checkout</button>
      </div>
    </div>
  )
}

export default CartSummary
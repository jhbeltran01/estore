import React from 'react'

type CartSummaryProps = {
  subtotal: number,
  shippingCost: number
}

const CartSummary = ({ subtotal, shippingCost }: CartSummaryProps): JSX.Element => {
  return (
    <div>
      <form action="GET">
        <input type="text" name="coupon" id="coupon" placeholder='Coupon' />
        <button type="submit">Apply Code</button>
      </form>

      <div>
        <h2>Cart Summary</h2>

        <div>
          <p>
            <span>Subtotal</span>
            <span>{subtotal}</span>
          </p>
          <p>Shipping Cost</p>
          <p>{shippingCost}</p>

          <hr />

          <p>
            <strong>Grand Total</strong>
            <strong>{subtotal + shippingCost}</strong>
          </p>
        </div>
      </div>
    </div>
  )
}

export default CartSummary
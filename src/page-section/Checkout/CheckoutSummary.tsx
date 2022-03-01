import React from 'react'

type CheckoutSummaryProps = {
  name: string,
  subtotal: number,
  shippingFee: number
}

const CheckoutSummary = ({ name, subtotal, shippingFee }: CheckoutSummaryProps): JSX.Element => {
  return (
    <div>
      <h2>Cart Total</h2>

      <div>
        <div>
          <p>Product Name</p>
          <p>{name}</p>
        </div>

        <div>
          <p>Sub Total</p>
          <p>${subtotal}</p>
        </div>

        <div>
          <p>Shipping Cost</p>
          <p>${shippingFee}</p>
        </div>

        <div>
          <strong>
            <p>Grand Total</p>
            <p>${subtotal + shippingFee}</p>
          </strong>
        </div>
      </div>
    </div>
  )
}

export default CheckoutSummary
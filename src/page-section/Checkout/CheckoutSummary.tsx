import React from 'react'

type CheckoutSummaryProps = {
  name: string,
  subtotal: number,
  shippingFee: number
}

const CheckoutSummary = ({ name, subtotal, shippingFee }: CheckoutSummaryProps): JSX.Element => {
  return (
    <div className='checkout__content'>
      <h2 className='checkout__title'>Cart Total</h2>

      <div>
        <div className='checkout__item flex-container-2'>
          <p>Product Name</p>
          <p>{name}</p>
        </div>

        <div className='checkout__item flex-container-2'>
          <p>Shipping Cost</p>
          <p>${shippingFee}</p>
        </div>

        <div className='checkout__item flex-container-2'>
          <p>Sub Total</p>
          <p>${subtotal}</p>
        </div>

        <div className='checkout__total'>
          <strong className='flex-container-2'>
            <p>Grand Total</p>
            <p>${subtotal + shippingFee}</p>
          </strong>
        </div>
      </div>
    </div>
  )
}

export default CheckoutSummary
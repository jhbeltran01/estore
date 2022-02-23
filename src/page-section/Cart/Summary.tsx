import React from 'react'

type SummaryProps = {
  subtotal: number,
  shippingCost: number
}

const Summary = ({ subtotal, shippingCost }: SummaryProps) => {
  return (
    <div className='bg-white pad-1'>
      <h2 className='mar-bot-2'>Cart Summary</h2>

      <div>
        <p className='flex-container-2 clr-gray mar-bot-2'>
          <span>Subtotal</span>
          <span>${subtotal}</span>
        </p>

        <p className='flex-container-2 clr-gray mar-bot-2'>
          <span>Shipping Cost</span>
          <span>${subtotal !== 0 ? shippingCost : 0}</span>
        </p>

        <hr className='clr-gray' />

        <p className='flex-container-2 fs-20 clr-gray'>
          <strong>Grand Total</strong>
          <strong>${subtotal !== 0 ? subtotal + shippingCost : 0}</strong>
        </p>
      </div>
    </div>
  )
}

export default Summary
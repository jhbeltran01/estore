import Radio from '@Components/elements/radio/Radio'
import React from 'react'

const PaymentMethods = (): JSX.Element => {
  return (
    <div className='checkout__content mar-top-2'>
      <h2 className='checkout__title'>Payment Methods</h2>

      <form action="" method="get">
        <Radio name="payment" value="paypal" label='Paypal' />
        <Radio name="payment" value="payoneer" label='Payoneer' />
        <Radio name="payment" value="check" label='Check Payment' />
        <Radio name="payment" value="bank-transfer" label='Direct Bank Transfer' />
        <Radio name="payment" value="cod" label='Cash on Delivery' />
      </form>
    </div>
  )
}

export default PaymentMethods
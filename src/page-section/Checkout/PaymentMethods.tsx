import Radio from '@Components/elements/radio/Radio'
import React, { useState } from 'react'

type PaymentMethodsProps = {
  updatePayment: (value: string) => void
}

const description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tincidunt orci ac eros volutpat maximus lacinia quis diam.';

const PaymentMethods = ({ updatePayment }: PaymentMethodsProps): JSX.Element => {
  const [selectedPayment, setSelectedPayment] = useState('');


  const updateSelectedPayment = (value: string) => {
    setSelectedPayment(value)
    updatePayment(value)
  }

  return (
    <div className='checkout__content mar-top-2'>
      <h2 className='checkout__title'>Payment Methods</h2>

      <form action="" method="get">
        <Radio
          name="payment"
          value="paypal"
          label='Paypal'
          description={description}
          checkedPayment={selectedPayment}
          updateCheckedPayment={updateSelectedPayment}
        />
        <Radio
          name="payment"
          value="payoneer"
          label='Payoneer'
          description={description}
          checkedPayment={selectedPayment}
          updateCheckedPayment={updateSelectedPayment}
        />
        <Radio
          name="payment"
          value="check"
          label='Check Payment'
          description={description}
          checkedPayment={selectedPayment}
          updateCheckedPayment={updateSelectedPayment}
        />
        <Radio
          name="payment"
          value="bank-transfer"
          label='Direct Bank Transfer'
          description={description}
          checkedPayment={selectedPayment}
          updateCheckedPayment={updateSelectedPayment}
        />
        <Radio
          name="payment"
          value="cod"
          label='Cash on Delivery'
          description={description}
          checkedPayment={selectedPayment}
          updateCheckedPayment={updateSelectedPayment}
        />
      </form>
    </div>
  )
}

export default PaymentMethods
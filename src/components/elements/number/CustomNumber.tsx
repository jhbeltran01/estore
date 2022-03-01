import React, { useState } from 'react'

type CustomNumberType = {
  updateTotal: Function | undefined,
  updatePrice: Function | undefined
}

const CustomNumber = ({ updateTotal, updatePrice }: CustomNumberType): JSX.Element => {
  const [quantity, setQuantity] = useState(0)
  const [toSubtract, setToSubtract] = useState(false)

  const invokeUpdateTotal = (quantity: number): void => {
    if (typeof updateTotal === 'undefined') return;
    updateTotal(quantity);
  }


  const updateQuantity = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const quantity = Number(event.target.value);

    if (isNaN(quantity)) return;

    const isNegative = quantity < 0;

    if (isNegative) return;
    console.log(quantity)

    setQuantity(quantity)
    invokeUpdateTotal(quantity)
  }


  const decreaseQuantity = () => {
    if (quantity - 1 === -1) return;

    const value = quantity > 0 ? quantity - 1 : quantity;
    setQuantity(value);
    invokeUpdateTotal(value)
  }



  const increaseQuantity = () => {
    setQuantity(quantity + 1);
    invokeUpdateTotal(quantity + 1)
  }


  return (
    <div>
      <button
        onClick={decreaseQuantity}
        className='btn-operation'
      >
        <i className="fa fa-minus"></i>
      </button>

      <input
        onChange={updateQuantity}
        className='input-field-2'
        type="text"
        value={quantity}
      />

      <button
        onClick={increaseQuantity}
        className='btn-operation'
      >
        <i className="fa fa-plus"></i>
      </button>
    </div>
  )
}

export default CustomNumber
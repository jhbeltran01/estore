import React, { useState } from 'react'

const CustomNumber = (): JSX.Element => {
  const [quantity, setQuantity] = useState(0)


  const updateQuantity = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const value = Number(event.target.value);
    const isPositive = value >= 0;
    isPositive && setQuantity(value);
  }

  return (
    <div>
      <button
        onClick={() => quantity > 0 && setQuantity(quantity - 1)}
        className='btn-operation'
      >
        <i className="fa fa-minus"></i>
      </button>

      <input
        onChange={updateQuantity}
        className='input-field-2'
        type="number"
        value={quantity}
      />

      <button
        onClick={() => setQuantity(quantity + 1)}
        className='btn-operation'
      >
        <i className="fa fa-plus"></i>
      </button>
    </div>
  )
}

export default CustomNumber
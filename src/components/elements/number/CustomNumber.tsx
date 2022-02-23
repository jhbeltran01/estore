import React, { useState } from 'react'

const CustomNumber = (): JSX.Element => {
  const [quantity, setQuantity] = useState(1)

  return (
    <div>
      <button className='btn-operation'>
        <i className="fa fa-minus"></i>
      </button>
      <input onChange={() => (console.log('change'))} className='input-field-2' type="number" value={quantity} />
      <button className='btn-operation'>
        <i className="fa fa-plus"></i>
      </button>
    </div>
  )
}

export default CustomNumber
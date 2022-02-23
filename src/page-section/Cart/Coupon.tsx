import React from 'react'

const Coupon = (): JSX.Element => {
  return (
    <form className='grid-2-column-2 mar-bot-2' action="GET">
      <input className='input-field-3' type="text" name="coupon" id="coupon" placeholder='Coupon' />
      <button className='btn-primary' type="submit">Apply Code</button>
    </form>
  )
}

export default Coupon
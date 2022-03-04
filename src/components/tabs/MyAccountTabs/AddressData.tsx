import React from 'react'

type AddressDataProps = {
  title: string,
  address: string,
  mobileNumber: string
}

function AddressData({ title, address, mobileNumber }: AddressDataProps) {
  return (
    <div className='clr-black-2'>
      <h3 className='capitalize fw-400 mar-bot-6 mar-top-1 fs-20'>{title} Address</h3>
      <p className='mar-bot-2'>{address}</p>
      <p className='mar-bot-2'>Mobile: {mobileNumber}</p>
      <button className='btn-primary'>Edit Address</button>
    </div>
  )
}

export default AddressData
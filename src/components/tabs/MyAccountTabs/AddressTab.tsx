import React from 'react'
import AddressData from './AddressData'

type AddressType = {
  id: number,
  type: string
  address: string,
  mobileNumber: string
}

type AddressTabProps = {
  addresses: AddressType[]
}

function AddressTab({ addresses }: AddressTabProps) {
  return (
    <div>
      <h2 className='clr-black-2 fw-600'>Address</h2>
      <div className='grid-2-column-responsive-9'>
        {
          addresses.map((address, index) => (
            <AddressData
              key={index}
              title={address.type}
              address={address.address}
              mobileNumber={address.mobileNumber} />
          ))
        }
      </div>
    </div>
  )
}

export default AddressTab
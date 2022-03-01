import EmailInput from '@Components/elements/input/EmailInput'
import TextInput from '@Components/elements/input/TextInput'
import React from 'react'

type AddressProps = {
  title: string
}

const Address = ({ title }: AddressProps): JSX.Element => {
  return (
    <div>
      <h2>{title} Address</h2>

      <div>
        <div>
          <TextInput label='First Name' />
          <TextInput label='Last Name' />
          <EmailInput label='Email' />
          <TextInput label='Mobile No.' />
        </div>

        <TextInput label='Address' />

        <div>
          <TextInput label='Country' />
          <TextInput label='City' />
          <TextInput label='State' />
          <TextInput label='ZIP Code' />
        </div>
      </div>
    </div>
  )
}

export default Address
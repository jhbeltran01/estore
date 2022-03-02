import EmailInput from '@Components/elements/input/EmailInput'
import TextInput from '@Components/elements/input/TextInput'
import React from 'react'

type AddressProps = {
  title: string
}

const Address = ({ title }: AddressProps): JSX.Element => {
  return (
    <div>
      <h2 className='checkout__title'>{title} Address</h2>

      <form method="post">
        <div className='grid-2-column-responsive-7'>
          <TextInput label='First Name' />
          <TextInput label='Last Name' />
          <EmailInput label='Email' />
          <TextInput label='Mobile No.' />
        </div>

        <TextInput label='Address' />

        <div className='grid-2-column-responsive-7'>
          <TextInput label='Country' />
          <TextInput label='City' />
          <TextInput label='State' />
          <TextInput label='ZIP Code' />
        </div>
      </form>
    </div>
  )
}

export default Address
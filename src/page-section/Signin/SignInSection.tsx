import EmailInput from '@Components/elements/input/EmailInput'
import TextInput from '@Components/elements/input/TextInput'
import React from 'react'

function SignInSection() {
  return (
    <form>
      <div className='grid-2-column-responsive-7'>
        <TextInput label='First Name' />
        <TextInput label='Last Name' />
        <EmailInput label='E-mail' />
        <TextInput label='Mobile No.' />
        <TextInput label='Password' />
        <TextInput label='Confirm Password' />
      </div>

      <button className='btn-primary'>Submit</button>
    </form>
  )
}

export default SignInSection
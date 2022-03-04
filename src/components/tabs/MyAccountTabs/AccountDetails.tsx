import React from 'react'

const AccountDetails = (): JSX.Element => {
  return (
    <div className='mar-bot-2'>
      <h2 className='fw-400 mar-bot-2'>Account Details</h2>

      <form action="">
        <div className='grid-2-column-responsive-7'>
          <input className='input-field-4 mar-bot-2' type="text" name="fname" id="fname" placeholder='First Name' />
          <input className='input-field-4 mar-bot-2' type="text" name="lname" id="lname" placeholder='Last Name' />
          <input className='input-field-4 mar-bot-2' type="text" name="mobile" id="mobile" placeholder='Mobile No.' />
          <input className='input-field-4 mar-bot-2' type="email" name="email" id="email" placeholder='Email' />
        </div>

        <input className='input-field-4 mar-bot-2' type="text" name='address' id='address' placeholder='Address' />
        <button className='btn-primary' type="submit">Update Account</button>
      </form>
    </div>
  )
}

export default AccountDetails
import React from 'react'

const PasswordChange = () => {
  return (
    <div>
      <h2 className='fw-400 mar-bot-2'>Password Change</h2>

      <form action="">
        <input className='input-field-4 mar-bot-2' type="text" name="curpass" id="curpass" placeholder='Current Password' />
        <div className='grid-2-column-responsive-7'>
          <input className='input-field-4 mar-bot-2' type="text" name="newpass" id="newpass" placeholder='New Password' />
          <input className='input-field-4 mar-bot-2' type="text" name="conpass" id="conpass" placeholder='Confirm Password' />
        </div>
        <button className='btn-primary' type="submit">Save Changes</button>
      </form>
    </div>
  )
}

export default PasswordChange
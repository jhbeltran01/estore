import React from 'react'

type EmailInputProps = {
  label: string
}

const EmailInput = ({ label }: EmailInputProps): JSX.Element => {
  return (
    <div className='mar-bot-2'>
      <div className='mar-bot-6'>
        <label htmlFor={label}>{label}</label>
      </div>
      <input
        className='input-field-4'
        type="email"
        name={label}
        id={label}
        placeholder={label}
      />
    </div>
  )
}

export default EmailInput
import React from 'react'

type EmailInputProps = {
  label: string
}

const EmailInput = ({ label }: EmailInputProps): JSX.Element => {
  return (
    <div>
      <div>
        <label htmlFor={label}>{label}</label>
      </div>
      <input
        type="email"
        name={label}
        id={label}
        placeholder={label}
      />
    </div>
  )
}

export default EmailInput
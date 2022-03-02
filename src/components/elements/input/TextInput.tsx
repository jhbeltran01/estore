import React from 'react'

type TextInputProps = {
  label: string
}

const TextInput = ({ label }: TextInputProps): JSX.Element => {
  return (
    <div className='mar-bot-2'>
      <div className='mar-bot-6'>
        <label htmlFor={label}>{label}</label>
      </div>
      <input
        className='input-field-4'
        type="text"
        name={label}
        id={label}
        placeholder={label}
      />
    </div>
  )
}

export default TextInput
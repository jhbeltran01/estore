import React from 'react'

type TextInputProps = {
  label: string
}

const TextInput = ({ label }: TextInputProps): JSX.Element => {
  return (
    <div>
      <div>
        <label htmlFor={label}>{label}</label>
      </div>
      <input
        type="text"
        name={label}
        id={label}
        placeholder={label}
      />
    </div>
  )
}

export default TextInput
import React from 'react'

type CheckboxProps = {
  name: string,
  label: string
}

const Checkbox = ({ name, label }: CheckboxProps) => {
  return (
    <div>
      <input type="checkbox" name={name} id="" />
      <label htmlFor={name}>{label}</label>
    </div>
  )
}

export default Checkbox
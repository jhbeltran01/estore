import React from 'react'

type CheckboxProps = {
  name: string,
  label: string
}

const Checkbox = ({ name, label }: CheckboxProps) => {
  return (
    <div className=''>
      <input className='checkbox' type="checkbox" name={name} id={name} />
      <label className='checkbox-label' htmlFor={name}>{label}</label>
    </div>
  )
}

export default Checkbox
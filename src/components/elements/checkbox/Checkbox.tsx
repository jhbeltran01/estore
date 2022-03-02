import React from 'react'

type CheckboxProps = {
  name: string,
  label: string,
  updateValue: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Checkbox = ({ name, label, updateValue }: CheckboxProps) => {
  return (
    <div className=''>
      <input onChange={updateValue} className='checkbox' type="checkbox" name={name} id={name} />
      <label className='checkbox-label' htmlFor={name}>{label}</label>
    </div>
  )
}

export default Checkbox
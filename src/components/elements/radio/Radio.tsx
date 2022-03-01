import React from 'react'

type RadioProps = {
  name: string,
  value: string
  label: string
}

const Radio = ({ name, value, label }: RadioProps) => {
  return (
    <div>
      <input type="radio" value={value} name={name} id={value} />
      <label htmlFor={value}>{label}</label>
    </div>
  )
}

export default Radio
import React from 'react'

type RadioProps = {
  name: string,
  value: string
  label: string
}

const Radio = ({ name, value, label }: RadioProps) => {
  return (
    <div className='mar-bot-2'>
      <input className='radio' type="radio" value={value} name={name} id={value} />
      <label className='radio-label' htmlFor={value}>{label}</label>
    </div>
  )
}

export default Radio
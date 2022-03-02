import React, { useEffect, useState } from 'react'

type RadioProps = {
  name: string,
  value: string,
  label: string,
  description: string,
  checkedPayment: string,
  updateCheckedPayment: (value: string) => void
}

const Radio = ({ name, value, label, description, checkedPayment, updateCheckedPayment }: RadioProps) => {
  const [descHeight, setDescHeight] = useState(0)

  const updateIsChecked = (event: React.ChangeEvent<HTMLInputElement>): void => {
    updateCheckedPayment(event.currentTarget.value)
  }


  useEffect(() => {
    const radioDesc = document.querySelector('.radio-desc')!;
    setDescHeight(radioDesc.clientHeight)

    window.addEventListener('resize', () => {
      setDescHeight(radioDesc.clientHeight)
    })
  }, [])



  return (
    <div>
      <div className='mar-bot-2'>
        <input
          onChange={updateIsChecked}
          className='radio'
          type="radio"
          value={value}
          name={name}
          id={value}
        />
        <label className='radio-label' htmlFor={value}>{label}</label>
      </div>

      <div className='transition-1 overflow-hidden-2' style={checkedPayment === value ? { height: `${descHeight}px` } : { height: '0' }}>
        <p className='radio-desc'>{description}</p>
      </div>
    </div>
  )
}

export default Radio
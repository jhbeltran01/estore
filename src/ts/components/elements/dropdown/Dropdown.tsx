import React, { MouseEventHandler, useState } from 'react'

type SelectProps = {
  options: string[]
}

const Dropdown = ({ options }: SelectProps): JSX.Element => {
  const [value, setValue] = useState(options[0]);


  const updateValue = (event: React.MouseEvent<HTMLOptionElement>): void => {
    const optionValue = event.currentTarget.value;

    if (value === optionValue) return;

    setValue(event.currentTarget.value)
  }


  return (
    <div className='dropdown-2'>
      <div className='flex-container-6'>
        <div>{value}</div>
        <div className='arrow'></div>
      </div>
      <div className='dropdown-2__content'>
        {
          options.map((option: string, index: number) =>
            <option onClick={updateValue} key={index} className='dropdown-2__option' value={option}>{option}</option>
          )
        }
      </div>
    </div>
  )
}

export default Dropdown
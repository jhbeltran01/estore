import React from 'react'

type CustomOptionsProps = {
  options: string[]
}

const CustomOptions = ({ options }: CustomOptionsProps): JSX.Element => {
  return (
    <div>
      {
        options.map((option: string, index: number) => (
          <button className='btn-option' key={index}>{option}</button>
        ))
      }
    </div>
  )
}

export default CustomOptions
import React from 'react'

type CustomOptionsProps = {
  options: string[]
}

const CustomOptions = ({ options }: CustomOptionsProps): JSX.Element => {
  return (
    <div>
      {
        options.map(option => (
          <button>{option}</button>
        ))
      }
    </div>
  )
}

export default CustomOptions
import React, { useState } from 'react'

type CustomOptionsProps = {
  options: string[]
}

const CustomOptions = ({ options }: CustomOptionsProps): JSX.Element => {
  const [activeOption, setActiveOption] = useState('');


  const changeActiveOption = (event: React.MouseEvent<HTMLButtonElement>): void => {

  }


  return (
    <div>
      {
        options.map((option: string, index: number) => (
          <button
            key={index}
            onClick={event => setActiveOption(event.currentTarget.id)}
            className={option === activeOption ? 'btn-option active' : 'btn-option'}
            id={option}
          >
            {option}
          </button>
        ))
      }
    </div>
  )
}

export default CustomOptions
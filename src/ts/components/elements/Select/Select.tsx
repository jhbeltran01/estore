import React from 'react'
import Option from '../Options/Option'

type SelectProps = {
  options: string[]
}

const Select = ({ options }: SelectProps): JSX.Element => {
  return (
    <select name="product-sort" id="product-sort">
      {
        options.map((option: string, index: number) =>
          <Option key={index} value={option} />
        )
      }
    </select>
  )
}

export default Select
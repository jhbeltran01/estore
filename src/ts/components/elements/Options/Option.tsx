import React from 'react'

type OptionProps = {
  value: string
}

const Option = ({ value }: OptionProps): JSX.Element => {
  return <option value={value}>{value}</option>
}

export default Option
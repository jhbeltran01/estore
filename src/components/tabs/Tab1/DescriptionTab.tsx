import React from 'react'

type DescriptionTab = {
  title: string,
  description: string
}

const DescriptionTab = ({ title, description }: DescriptionTab): JSX.Element => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}

export default DescriptionTab
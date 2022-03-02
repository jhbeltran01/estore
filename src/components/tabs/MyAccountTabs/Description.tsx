import React from 'react'

type DescriptionProps = {
  title: string,
  description: string
}

function Description({ title, description }: DescriptionProps) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}

export default Description
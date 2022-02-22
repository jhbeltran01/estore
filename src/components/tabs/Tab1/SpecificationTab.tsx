import React from 'react'

type SpecificationTabProps = {
  title: string,
  specifications: {
    id: string,
    specification: string
  }[]
}

const SpecificationTab = ({ title, specifications }: SpecificationTabProps): JSX.Element => {
  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {
          specifications.map(specification => (
            <li key={specification.id}>{specification.specification}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default SpecificationTab
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
      <h2 className='mar-bot-2'>{title}</h2>
      <ul className='style-type-none'>
        {
          specifications.map(specification => (
            <li className='arrow-2' key={specification.id}>{specification.specification}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default SpecificationTab
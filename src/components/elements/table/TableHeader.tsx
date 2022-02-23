import React from 'react'

type TableHeaderProps = {
  headers: string[]
}

const TableHeader = ({ headers }: TableHeaderProps): JSX.Element => {
  return (
    <thead>
      <tr>
        {
          headers.map((header: string, index: number) => <th key={index}>{header}</th>)
        }
      </tr>
    </thead>
  )
}

export default TableHeader
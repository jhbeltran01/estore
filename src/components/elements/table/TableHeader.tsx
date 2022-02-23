import React from 'react'

type TableHeaderProps = {
  headers: string[]
}

const TableHeader = ({ headers }: TableHeaderProps): JSX.Element => {
  return (
    <thead>
      <tr>
        {
          headers.map((header: string, index: number) =>
            <th
              key={index}
              className={header === 'Quantity' ? 'table-1__header' : 'table-1__header'}
            >
              {header}
            </th>
          )
        }
      </tr>
    </thead>
  )
}

export default TableHeader
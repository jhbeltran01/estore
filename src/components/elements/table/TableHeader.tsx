import React from 'react'

type TableHeaderProps = {
  headers: string[],
  className: string
}

const TableHeader = ({ headers, className }: TableHeaderProps): JSX.Element => {
  return (
    <thead>
      <tr>
        {
          headers.map((header: string, index: number) =>
            <th
              key={index}
              className={className}
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
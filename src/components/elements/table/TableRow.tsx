import CartType from '@Types/Cart/CartType'
import React, { useState } from 'react'
import CustomNumber from '../number/CustomNumber'
import ProductCol from './ProductCol'

function TableRow({ imgSrc, name, price }: CartType) {
  const [total, setTotal] = useState(0)

  return (
    <tr>
      <th>
        <ProductCol image={imgSrc} name={name} />
      </th>
      <th>{price}</th>
      <th><CustomNumber /></th>
      <th>{total}</th>
      <th>
        <button><i className="fa fa-trash"></i></button>
      </th>
    </tr>
  )
}

export default TableRow
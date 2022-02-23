import CartType from '@Types/Cart/CartType'
import React, { useState } from 'react'
import CustomNumber from '../number/CustomNumber'
import ProductCol from './ProductCol'

function TableRow({ imgSrc, name, price }: CartType) {
  const [total, setTotal] = useState(0)

  return (
    <tr>
      <td className='table-1__data'>
        <ProductCol image={imgSrc} name={name} />
      </td>
      <td className='table-1__data'>${price}</td>
      <td className='table-1__data'><CustomNumber /></td>
      <td className='table-1__data'>${total}</td>
      <td className='table-1__data'>
        <button className='btn-delete'><i className="fa fa-trash"></i></button>
      </td>
    </tr>
  )
}

export default TableRow
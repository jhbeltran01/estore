import { OrdersType } from '@Types/MyAccount/OrdersType'
import React from 'react'

type OrdersTableRowProps = {
  name: string,
  date: string,
  price: number,
  status: string
  number: number
}

function OrdersTableRow({ name, date, price, status, number }: OrdersTableRowProps) {
  return (
    <tr>
      <td className='table-2__data'>{number + 1}</td>
      <td className='table-2__data'>{name}</td>
      <td className='table-2__data'>{date}</td>
      <td className='table-2__data'>${price}</td>
      <td className='table-2__data'>{status}</td>
      <td className='table-2__data'><button className='btn-primary'>View</button></td>
    </tr>
  )
}

export default OrdersTableRow
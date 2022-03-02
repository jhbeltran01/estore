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
      <td>{number}</td>
      <td>{name}</td>
      <td>{date}</td>
      <td>${price}</td>
      <td>{status}</td>
      <td><button>View</button></td>
    </tr>
  )
}

export default OrdersTableRow
import OrdersTableRow from '@Components/elements/table/OrdersTableRow'
import TableHeader from '@Components/elements/table/TableHeader'
import { OrdersType } from '@Types/MyAccount/OrdersType'
import React from 'react'

type OrdersProps = {
  orders: OrdersType[]
}

const headers = ['No.', 'Product', 'Date', 'Price', 'Status', 'Action']

function Orders({ orders }: OrdersProps) {
  console.log(orders)
  return (
    <div>
      <table>
        <TableHeader headers={headers} className='table-2__header' />
        <tbody>
          {
            orders.map((order, index) =>
              <OrdersTableRow
                key={order.id}
                name={order.name}
                date={order.date}
                price={order.price}
                status={order.status}
                number={index}
              />
            )
          }
        </tbody>
      </table>
    </div>
  )
}

export default Orders
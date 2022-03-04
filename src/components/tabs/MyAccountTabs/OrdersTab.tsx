import OrdersTableRow from '@Components/elements/table/OrdersTableRow'
import TableHeader from '@Components/elements/table/TableHeader'
import { OrdersType } from '@Types/MyAccount/OrdersType'
import React from 'react'

type OrdersProps = {
  orders: OrdersType[]
}

const headers = ['No.', 'Product', 'Date', 'Price', 'Status', 'Action']

function OrdersTab({ orders }: OrdersProps) {
  return (
    <div className='overflow-scroll'>
      <table className='table-2'>
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

export default OrdersTab
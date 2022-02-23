import TableHeader from '@Components/elements/table/TableHeader'
import TableRow from '@Components/elements/table/TableRow'
import CartType from '@Types/Cart/CartType'
import React from 'react'

const headers = ['Product', 'Prize', 'Quantity', 'Total', 'Remove']

type CartTableProps = {
  products: CartType[]
}

function CartTable({ products }: CartTableProps) {

  return (
    <table>
      <TableHeader headers={headers} />
      <tbody>
        {
          products.map((product: CartType, index: number) => (
            <TableRow
              key={index}
              imgSrc={product.imgSrc}
              name={product.name}
              price={product.price}
            />
          ))
        }
      </tbody>
    </table>
  )
}

export default CartTable
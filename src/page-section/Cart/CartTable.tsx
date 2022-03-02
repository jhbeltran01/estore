import TableHeader from '@Components/elements/table/TableHeader'
import TableRow from '@Components/elements/table/CartTableRow'
import CartType from '@Types/Cart/CartType'
import React, { useState } from 'react'

const headers = ['Product', 'Prize', 'Quantity', 'Total', 'Remove']

type CartTableProps = {
  products: CartType[]
}

function CartTable({ products }: CartTableProps) {
  const [productsToBeDisplayed, setProductsToBeDisplayed] = useState(products)

  const deleteProduct = (id: string): void => {
    setProductsToBeDisplayed(productsToBeDisplayed.filter(product => product.id !== id))
  }


  const tableRows = productsToBeDisplayed.map((product: CartType) => (
    <TableRow
      key={product.id}
      id={product.id}
      imgSrc={product.imgSrc}
      name={product.name}
      price={product.price}
      deleteProduct={deleteProduct}
    />
  ));


  return (
    <table className='table-1'>
      <TableHeader headers={headers} className='table-1__header' />
      <tbody>
        {tableRows}
      </tbody>
    </table>
  )
}

export default CartTable
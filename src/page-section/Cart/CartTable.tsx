import TableHeader from '@Components/elements/table/TableHeader'
import CartTableRow from '@Components/elements/table/CartTableRow'
import React, { useState } from 'react'

type CartType = {
  id: string,
  imgSrc: string,
  name: string,
  price: number
}


const headers = ['Product', 'Prize', 'Quantity', 'Total', 'Remove']

type CartTableProps = {
  products: CartType[]
}

function CartTable({ products }: CartTableProps) {
  const [productsToBeDisplayed, setProductsToBeDisplayed] = useState(products)

  const deleteProduct = (id: string): void => {
    setProductsToBeDisplayed(productsToBeDisplayed.filter(product => product.id !== id))
  }


  return (
    <table className='table-1'>
      <TableHeader headers={headers} className='table-1__header' />
      <tbody>
        {
          productsToBeDisplayed.map((product: CartType) => (
            <CartTableRow
              key={product.id}
              id={product.id}
              imgSrc={product.imgSrc}
              name={product.name}
              price={product.price}
              deleteProduct={deleteProduct}
            />
          ))
        }
      </tbody>
    </table>
  )
}

export default CartTable
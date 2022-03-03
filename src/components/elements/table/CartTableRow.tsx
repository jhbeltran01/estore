import { UpdateSubTotalContext } from '@Pages/Cart'
import React, { useContext, useState } from 'react'
import CustomNumber from '../number/CustomNumber'
import ProductCol from './ProductCol'

type CartTableRowProps = {
  id: string,
  imgSrc: string,
  name: string,
  price: number,
  deleteProduct: Function
}

function CartTableRow({ id, imgSrc, name, price, deleteProduct }: CartTableRowProps) {
  const [total, setTotal] = useState(0);
  const updateSubTotal = useContext(UpdateSubTotalContext);

  const updateTotal = (quantity: number) => {
    const newTotal = quantity * price;

    updateSubTotal(newTotal - total)
    setTotal(newTotal);
  }

  const deleteRow = (event: React.MouseEvent<HTMLButtonElement>) => {
    deleteProduct(event.currentTarget.id);
    updateSubTotal(-total);
  }

  return (
    <tr>
      <td className='table-1__data'>
        <ProductCol image={imgSrc} name={name} />
      </td>
      <td className='table-1__data'>${price}</td>
      <td className='table-1__data'>
        <CustomNumber updateTotal={updateTotal} updatePrice={undefined} />
      </td>
      <td className='table-1__data'>${total}</td>
      <td className='table-1__data'>
        <button
          onClick={deleteRow}
          className='btn-delete'
          id={id}
        >
          <i className="fa fa-trash"></i>
        </button>
      </td>
    </tr >
  )
}

export default CartTableRow
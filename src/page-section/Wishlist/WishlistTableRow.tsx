import CustomNumber from '@Components/elements/number/CustomNumber'
import ProductCol from '@Components/elements/table/ProductCol'
import React, { useState } from 'react'

type WishlistTableRowProps = {
  imgSrc: string,
  name: string,
  price: number,
  updateWishlist: Function,
  id: string
}

function WishlistTableRow({ imgSrc, name, price, updateWishlist, id }: WishlistTableRowProps) {
  const invokeUpdateWishlist = (event: React.MouseEvent<HTMLButtonElement>) => {
    updateWishlist(event)
  }

  return (
    <tr>
      <td className='table-3__data'><ProductCol image={imgSrc} name={name} /></td>
      <td className='table-3__data'>${price}</td>
      <td className='table-3__data'><CustomNumber updatePrice={undefined} updateTotal={undefined} /></td>
      <td className='table-3__data'><button className='btn-primary'>Add To Cart</button></td>
      <td className='table-3__data'>
        <button onClick={invokeUpdateWishlist} className='btn-delete' id={id}>
          <i className="fa fa-trash" aria-hidden="true"></i>
        </button>
      </td>
    </tr>
  )
}

export default WishlistTableRow
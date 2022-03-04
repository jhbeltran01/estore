import React, { useState } from 'react'
import ReactDOM from 'react-dom';
import '@Utils/toggleMobileNavMenu'
import TableHeader from '@Components/elements/table/TableHeader';
import WishlistTableRow from '@Page-section/Wishlist/WishlistTableRow';
import products from '@Json/products.json';
import Header from '@Components/header/Header';

const headers = ['Product', 'Price', 'Quantity', 'Add To Cart', 'Remove'];

const Wishlist = (): JSX.Element => {
  const [wishlist, setWishlist] = useState(products.filter((product, index) => index < 5 && product))

  const updateWishlist = (event: React.MouseEvent<HTMLButtonElement>) => {
    const tempWishlist = wishlist.filter(product => product.id !== event.currentTarget.id)
    setWishlist(tempWishlist)
  }

  return (
    <React.Fragment>
      {
        ReactDOM.createPortal(
          <Header />,
          document.getElementById('search-bar')!
        )
      }

      <div className='pad-3 pad-2 mar-top-res'>
        <div className='overflow-scroll pad-10 bg-white-2'>
          <table className='table-3'>
            <TableHeader headers={headers} className='table-3__header' />
            <tbody>
              {
                wishlist.map((product, index) =>
                  <WishlistTableRow
                    key={product.id}
                    id={product.id}
                    imgSrc={product.imgSrc}
                    name={product.name}
                    price={product.prize}
                    updateWishlist={updateWishlist}
                  />
                )
              }
            </tbody>
          </table>
        </div>
      </div>
    </React.Fragment>
  )
}


ReactDOM.render(
  <React.StrictMode>
    <Wishlist />
  </React.StrictMode>,
  document.getElementById('root')
)
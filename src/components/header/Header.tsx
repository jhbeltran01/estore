import React from 'react';
import ReactDOM from 'react-dom';
import logo from '@Images/logo.png';
import Search1 from '@Components/elements/Search/Search1';


function Header() {
  return (
    <div className='bg-white-2 pad-3'>
      <div className='search-bar  grid-container-1'>
        <img className='search-bar__logo' src={logo} alt="E-Store Logo" />

        <Search1 />

        <div>
          <button className='btn-primary mar-right'><i className="fa fa-heart"></i>(0)</button>
          <button className='btn-primary'><i className="fa fa-shopping-cart"></i>(0)</button>
        </div>
      </div>
    </div>
  )
}

export default Header;

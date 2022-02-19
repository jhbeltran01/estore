import React from 'react';
import ReactDOM from 'react-dom';
import logo from '../../../../public/images/logo.png';


function Header() {
  return ReactDOM.createPortal(
    (
      <div className='bg-white-2 pad-3'>
        <div className='search-bar  grid-container-1'>
          <img className='search-bar__logo' src={logo} alt="E-Store Logo" />

          <form className='form-1' action="GET">
            <input className='search-input-field' type="search" name="search" id="search" placeholder='Search' />
            <button className='btn-search pos-item clr-light-red'><i className="fa fa-search"></i></button>
          </form>

          <div>
            <button className='btn-primary mar-right'><i className="fa fa-heart"></i>(0)</button>
            <button className='btn-primary'><i className="fa fa-shopping-cart"></i>(0)</button>
          </div>
        </div>
      </div>
    ),
    document.getElementById('search-bar')!
  );
}

export default Header;

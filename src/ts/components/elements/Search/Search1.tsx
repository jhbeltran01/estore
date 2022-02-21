import React from 'react'

const Search1 = (): JSX.Element => {
  return (
    <form className='form-1 mar-y' action="GET">
      <input className='search-input-field' type="search" name="search" id="search" placeholder='Search' />
      <button className='btn-search pos-item clr-light-red'><i className="fa fa-search"></i></button>
    </form>
  )
}

export default Search1
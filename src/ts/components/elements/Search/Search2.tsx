import React from 'react'

const Search2 = (): JSX.Element => {
  return (
    <form className='form-1 flex mar-bot' action="GET">
      <input className='search-input-field-2' type="search" name="search" id="search" placeholder='Search' />
      <button className='btn-search pos-item' type="submit"><i className="fa fa-search"></i></button>
    </form>
  )
}

export default Search2
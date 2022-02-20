import React from 'react'

const Search2 = (): JSX.Element => {
  return (
    <form action="GET">
      <input type="search" name="search" id="search" placeholder='Search' />
      <button type="submit"><i className="fa fa-search"></i></button>
    </form>
  )
}

export default Search2
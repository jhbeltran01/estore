import React from "react";
import Select from "./Select";

const ProductSort = (): JSX.Element => {
  const productSortOptions = ['Newest', 'Popular', 'Most Sale']

  return (
    <button>
      <span>Product Sort By</span>
      <Select options={productSortOptions} />
    </button>
  )
}

export default ProductSort;
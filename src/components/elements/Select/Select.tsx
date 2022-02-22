import React, { useEffect } from "react";
import Dropdown from "@Components/elements/dropdown/Dropdown";

type ProductSortProps = {
  title: string,
  id: string,
  options: string[]
}

const Select = ({ title, id, options }: ProductSortProps): JSX.Element => {

  useEffect(() => {
    const customSelect = document.getElementById(id);
    const dropdownContent = customSelect?.querySelector('.dropdown-2__content')

    customSelect?.addEventListener('click', () => {
      dropdownContent?.classList.toggle('show-3')
    })
  }, [])



  return (
    <div className='select-custom flex-container-3 mar-bot' id={id}>
      <span>{title}</span>
      <Dropdown options={options} />
    </div>
  )
}

export default Select;
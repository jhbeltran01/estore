import React, { MouseEvent, MouseEventHandler, useState } from 'react'

type PaginationProps = {
  numberOfPage: number,
  updateContentToBeDisplayed: Function
}

const Pagination = ({ numberOfPage, updateContentToBeDisplayed }: PaginationProps): JSX.Element => {
  const [pageNumber, setPageNumber] = useState(1);



  const goToPreviousPage = (): void => {
    if (pageNumber === 1) return;

    setPageNumber(pageNumber - 1);
    updateContentToBeDisplayed(pageNumber - 1, true);
  }



  const goToNextPage = (): void => {
    if (pageNumber === numberOfPage) return;

    setPageNumber(pageNumber + 1);
    updateContentToBeDisplayed(pageNumber + 1, false);
  }



  const goToClickedPageNumber = (event: MouseEvent): void => {
    const buttonId = Number(event.currentTarget.id);

    if (pageNumber === buttonId) return;

    const isToGoToPreviousPage: boolean = pageNumber > Number(event.currentTarget.id);
    isToGoToPreviousPage ? updateContentToBeDisplayed(buttonId, true) :
      updateContentToBeDisplayed(buttonId, false);

    setPageNumber(buttonId);
  }



  let buttonNumbers: JSX.Element[] = [];

  for (let number = 1; number <= numberOfPage; ++number) {
    buttonNumbers.push(
      <button
        key={number}
        id={`${number}`} className={pageNumber === number ? 'active-page-item' : ''}
        onClick={goToClickedPageNumber}
      >
        {number}
      </button>
    )
  }



  return (
    <div>
      <button onClick={goToPreviousPage}>Previous</button>
      {buttonNumbers}
      <button onClick={goToNextPage}>Next</button>
    </div>
  )
}

export default Pagination
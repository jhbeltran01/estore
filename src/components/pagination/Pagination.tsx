import React, { MouseEvent, useState } from 'react'

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



  const goToClickedPageNumber = (event: MouseEvent<HTMLButtonElement>): void => {
    const buttonId = Number(event.currentTarget.id);

    if (pageNumber === buttonId) return;

    const isToGoToPreviousPage: boolean = pageNumber > Number(event.currentTarget.id);

    updateContentToBeDisplayed(buttonId, isToGoToPreviousPage);

    setPageNumber(buttonId);
  }



  let buttonNumbers: JSX.Element[] = [];

  for (let number = 1; number <= numberOfPage; ++number) {
    buttonNumbers.push(
      <button
        key={number}
        id={`${number}`}
        className={pageNumber === number ? 'btn-pagination active' : 'btn-pagination'}
        onClick={goToClickedPageNumber}
      >
        {number}
      </button>
    )
  }



  return (
    <div className='grid-center'>
      <div>
        <button className='btn-pagination' onClick={goToPreviousPage}>Previous</button>
        {buttonNumbers}
        <button className='btn-pagination' onClick={goToNextPage}>Next</button>
      </div>
    </div>
  )
}

export default Pagination
import React from 'react'
import ReactDOM from 'react-dom';
import Search2 from '../elements/Search/Search2';
import Select from '../elements/Select/Select';

const sortOptions = ['Newest', 'Popular', 'Most Sale']
let prizeOptions: string[] = [];

for (let number = 0; number < 500; number += 50) {
  prizeOptions.push(`$${number !== 0 ? number + 1 : 0} - $${number + 50}`)
}

const Filter = (): JSX.Element => {

  return ReactDOM.createPortal(
    (
      <div className='mar pad-1 bg-white-2'>
        <Search2 />
        <Select title={'Product sort by'} id='sort' options={sortOptions} />
        <Select title={'Product prize range'} id='prize-range' options={prizeOptions} />
      </div>
    ),
    document.getElementById('filter')!);
}

export default Filter
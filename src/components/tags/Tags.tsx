import React from 'react'

type TagsProps = {
  tags: string[]
}

const Tags = ({ tags }: TagsProps): JSX.Element => {

  return (
    <div>
      {
        tags.map((tag: string, index: number) => (
          <button className='btn-tag' key={index}>{tag}</button>
        ))
      }
    </div>
  )
}

export default Tags
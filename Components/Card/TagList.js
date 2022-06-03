import React from 'react'
import Tag from './Tag'
const TagList = ({ tag }) => {
  console.log(tag)
  
  return (
    <div className="flex flex-row">
      {tag.map((tag, index) => {
        return (
          <div key={index}>
            <Tag title={tag.title} backgroundColor={tag.bgClass} textColor={tag.textClass} />
          </div>
        )
      })}
    </div>
  )
}

export default TagList
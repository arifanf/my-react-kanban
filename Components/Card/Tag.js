import React from 'react'

const Tag = ({tag}) => {
  return (
    <div className={`text-xs leading-3 ${tag.tags.textClass} font-medium bg-[#FFF2C2] rounded p-1.5`} >Website</div>
  )
}

export default Tag
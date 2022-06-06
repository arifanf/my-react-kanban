import React from 'react'

const Tag = ({title, backgroundColor, textColor}) => {


  return (
    <div className={`text-xs mx-1 leading-3 font-medium rounded p-1.5 ${backgroundColor} ${textColor}`}>{title}</div>
  )
}

export default Tag
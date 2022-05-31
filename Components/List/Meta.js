import React from 'react'

const Meta = (props) => {
  return (
    <div>
      <h2 className="font-bold mt-4 mb-2 leading-5">{props.title}</h2>
      <p className="text-[13px] text-[#5E5E7A] mb-2">{props.description}</p>
    </div>
  )
}

export default Meta
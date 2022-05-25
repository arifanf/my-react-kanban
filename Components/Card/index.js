import React from 'react'
import Avatar from './Avatar'
import Header from './Header'
import TagList from './TagList'

const Card = ({ children }) => {
  return (
      <div className="bg-white rounded-[10px] p-3">
        <Header />
        <div className="py-6 text-[#5E5E7A] text-[13px] leading-5 font-medium ">
          {children}
        </div>
        <TagList />
        <Avatar />
      </div>
  )
}

export default Card
import React from 'react'
import Avatar from './Avatar'
import Header from './Header'
import TagList from './TagList'

const Card = ({ children, item }) => {

  return (
      <div className="flex flex-col space-y-6">
        {item.map((card, index) => {
          return (
            <div key={index} className="bg-white rounded-[10px] p-3">
              <Header title={card.title} />
              <div className="py-6 text-[#5E5E7A] text-[13px] leading-5 font-medium ">
                {children}
              </div>
              <TagList tag={card.tags} />
              <Avatar />
            </div>
          )
        })}
      </div>
  )
}

export default Card
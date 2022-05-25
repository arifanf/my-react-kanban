import React from 'react'
import Avatar from './Avatar'
import Header from './Header'
import TagList from './TagList'

const Card = ({ children }) => {
  return (
      <div>
        <Header />
        {children}
        <TagList />
        <Avatar />
      </div>
  )
}

export default Card
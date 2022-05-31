import React from 'react'
import CoverImage from './CoverImage'
import Meta from './Meta'

const Header = ({cover, title, description}) => {
  return (
    <div className="bg-white rounded-[10px] p-3">
        <CoverImage cover={cover} />
        <Meta title={title} description={description} />
    </div>
  )
}

export default Header
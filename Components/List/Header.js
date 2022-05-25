
import React from 'react'
import CoverImage from './CoverImage'
import Meta from './Meta'

const Header = () => {
  return (
    <div className="bg-white rounded-md p-3">
        <CoverImage />
        <Meta />
    </div>
  )
}

export default Header
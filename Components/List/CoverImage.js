import React from 'react'

const CoverImage = (props) => {

  return (
    <>
        <div>
          <img src={props.cover} alt="ImageCover" 
            className="rounded-md" />
        </div>
    </>
  )
}

export default CoverImage
import React from 'react'

const TagList = () => {
  return (
    <div className="flex flex-row">
      <div className="text-xs leading-3 text-[#EBB800] font-medium bg-[#FFF2C2] rounded p-1.5 ">Website</div>
      <div className="text-xs mx-2.5 leading-3 text-[#80C480] font-medium bg-[#D9FAD9] rounded p-1.5 ">UX</div>
      <div className="text-xs mr-2.5 leading-3 text-[#F56C6C] font-medium bg-[#FFEDED] rounded p-1.5 ">UI</div>
      <div className="text-xs leading-3 text-[#7B61FF] font-medium bg-[#EAE5FF] rounded p-1.5 ">Wireframe</div>
    </div>
  )
}

export default TagList
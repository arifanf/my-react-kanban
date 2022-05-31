import React from 'react'

const Header = ({title}) => {
  return (
    <div className="flex flex-row justify-between">
      <div className="font-bold mt-2 leading-5">{title}</div>
      <div className="bg-[#FFEDED] text-[10px] font-semibold p-2.5 text-[#F56C6C] rounded">Expire on 24th jun</div>
    </div>
  )
}

export default Header
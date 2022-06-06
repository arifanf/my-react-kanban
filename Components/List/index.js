import React, { useState } from 'react'
import Header from './Header'
import Separator from './Separator'
import Card from '../Card/index'

const List = ({data}) => {

  return (
    <div className="flex flex-col">
      <div className="bg-[#F2F2FA] m-2.5 p-4 rounded-md shadow-lg w-[370px] min-h-fit">
        <Header cover={data.cover} title={data.title} description={data.description}  />
        <Separator />
        <Card item={data.cards} />
        {/* <Card>Card Content</Card> */}
      </div>
    </div>
  )
}

export default List
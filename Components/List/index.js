import React, { useState } from 'react'
import Header from './Header'
import Separator from './Separator'
import Card from '../Card/index'

const List = ({data}) => {

  return (
    <div className="flex flex-col">
      <div className="bg-[#F2F2FA] m-2.5 p-4 rounded-md shadow-lg">
        <Header cover={data.cover} title={data.title} description={data.description}  />
        <Separator />
        <Card item={data.cards}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,</Card>
        {/* <Card>Card Content</Card> */}
      </div>
    </div>
  )
}

export default List
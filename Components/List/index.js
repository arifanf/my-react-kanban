import React from 'react'
import Header from './Header'
import Separator from './Separator'
import Card from '../Card/index'

const List = () => {
  return (
    <div className="flex flex-col">
      <div className="bg-[#F2F2FA] rounded-md m-2.5 p-4">
        <Header />
        <Separator />
        <Card>Card Content</Card>
        <Card>Card Content</Card>
      </div>
    </div>
  )
}

export default List
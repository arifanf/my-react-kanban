import React from 'react'
import { useRouter } from 'next/router'
import Header from './Header'
import Separator from './Separator'
import Card from '../Card/index'

const List = () => {

  const router = useRouter()

  return (
    <div className="flex flex-col">
      <div className="bg-[#F2F2FA] m-2.5 p-4 w-[350px] max-w-[416px]">
        <Header />
        <Separator />
        <Card>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,</Card>
        {/* <Card>Card Content</Card> */}
      </div>
    </div>
  )
}

export default List
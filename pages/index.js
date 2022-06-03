import React  from 'react'
import List from '../Components/List'
import ListData from '../Components/data/list'
import Head from 'next/head'

const Home = () => {

  console.log(ListData)

  return (
    <>
      <Head>
          <title>Home Page</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
          <link 
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,400;0,500;0,600;0,700;1,300&display=swap"
          />
      </Head>

      <div className="font-main w-full min-h-screen overflow-x-auto px-10 py-10 bg-[#DCDCFF] leading-5">
        {/* <div className="flex items-center p-4 bg-white shadow-md  ">
          <h1 className="font-semibold">My Kanban Board</h1>
        </div> */}
        <div className="w-full flex space-x-1 items-start min-w-[406px]">
          {ListData.map((item, index) => {
            return (
              <List key={index} data={item} />
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Home

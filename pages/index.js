import React from 'react'
import List from '../Components/List'

const Home = () => {
  return (
    <>
      <h1>My Kanban Board</h1>
      <div className="flex flex-row lg:flex-grow mx-12">
        <List />
        <List />
        <List />
        <List />
      </div>
    </>
  )
}

export default Home
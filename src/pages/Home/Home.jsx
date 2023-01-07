import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import "./Home.scss"

const Home = () => {
  return (
    <>
    <div className='home'>
      <Sidebar/>
      <div className="homecontainer">
        <Navbar/>
      </div>
    </div>
    </>
  )
}

export default Home
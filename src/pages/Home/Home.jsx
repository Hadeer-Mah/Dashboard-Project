import React from 'react'
import Featured from '../../components/Featured/Featured'
import Charts from '../../components/Charts/Charts'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import Widget from '../../components/Widget/Widget'
import "./Home.scss"
import Table from '../../components/Table/Table'

const Home = () => {
  return (
    <>
    <div className='home'>
      <Sidebar/>
      <div className="homecontainer">
        <Navbar/>
        <div className="widgets">
          <Widget type="user"/>
          <Widget type="order"/>
          <Widget type="earnings"/>
          <Widget type="balance"/>
        </div>
        <div className="charts">
          <Featured/>
          <Charts aspect={ 2/1 } title='Last 6 Months (Revenue)'/>
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <Table/>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home
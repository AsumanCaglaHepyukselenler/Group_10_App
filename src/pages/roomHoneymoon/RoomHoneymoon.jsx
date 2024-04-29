import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import HoneymoonPage from '../../components/roomPages/HoneymoonPage'

const RoomHoneymoon = () => {
  return (
    <div>
      <Navbar/>
      <Header type="list" type2="list"/>
      <HoneymoonPage/>
      <Footer/>
    </div>
  )
}

export default RoomHoneymoon
import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import PanoramicPage from '../../components/roomPages/PanaromicPage'

const RoomPanoramic = () => {
  return (
    <div>
      <Navbar/>
      <Header type="list" type2="list"/>
      <PanoramicPage/>
      <Footer/>
    </div>
  )
}

export default RoomPanoramic
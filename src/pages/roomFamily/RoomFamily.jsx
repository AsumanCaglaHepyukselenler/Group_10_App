import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import FamilyPage from '../../components/roomPages/FamilyPage'

const RoomFamily = () => {
  return (
    <div>
      <Navbar/>
      <Header type="list" type2="list"/>
      <FamilyPage/>
      <Footer/>
    </div>
  )
}

export default RoomFamily
import React from "react";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import RoomPage from "../../components/roomPages/RoomPage";

const RoomStandard = () => {
    return(

        <div>
            <Navbar/>
            <Header type="list" type2="list"/>
            <RoomPage/>
            <Footer/>
        </div>
    )
}

export default RoomStandard
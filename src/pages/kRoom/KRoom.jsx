import React from "react";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import KingPage from "../../components/roomPages/KingPage";



const KRoom = () => {
    return(
        <div>
            <Navbar/>
            <Header type="list" type2="list"/>
            <KingPage/>
            <Footer/>
        </div>
    )
}

export default KRoom
import React from "react";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import DeluxePage from "../../components/roomPages/DeluxePage";



const DRoom = () => {
    return(
        <div>
            <Navbar/>
            <Header type="list" type2="list"/>
            <DeluxePage/>
            <Footer/>
        </div>
    )
}

export default DRoom
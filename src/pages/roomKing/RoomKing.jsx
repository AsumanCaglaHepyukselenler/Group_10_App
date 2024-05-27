import React from "react";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import RoomPage from "../../components/roomPages/RoomPage";



const KRoom = () => {
    return(
        <div>
            <Navbar/>
            <Header type="list"/>
            <RoomPage 
            title = "ReservEase Hotel"
            location="Yalıkavak Dirmil mh."
            distance="Excellent Location - 500m from center"
            info="Book a stay over $114 from this room and get a free airport taxi!"
            img= "hotel_photo2/king/king_suit.png"
            img2="hotel_photo2/king/king_suit2.png"
            roomType= "King Room"
            roomDesc= "Maximum of 4 Guests, For our guests who would like to have even more comfortable experience."
            details= "Perfect for a 9-night stay!"
            detailsLocation ="Yalıkavak Dirmil Mah. Frank Azmağı Cad., No.: 2, Bodrum, Muğla, 48400"
            price= "$945 (9 nights)"
            button= "Reserve or Book Now!"/>
            <Footer/>
        </div>
    )
}

export default KRoom
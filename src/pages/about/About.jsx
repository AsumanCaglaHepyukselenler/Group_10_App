import React from 'react';
import './about.css'; // CSS dosyasını içe aktar
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import Footer from "../../components/footer/Footer";

const About = () => {
    return (
        <div>
            <Navbar/>
            <Header type="list" type2="list"/>
            <div className="about-container">
                <div className="about-content">
                    <h2>About Us</h2>
                    <p>
                    As ReservEase, we aim to offer our guests an unforgettable accommodation experience in the fascinating atmosphere of nature, including our hotel. We work to meet the needs of our guests, ensure their comfort and make their holidays unforgettable.
                    </p>
                    <h>Our Vision</h>
                    <p>
                    To provide the best service to our guests with our friendly and sincere staff and a perfectionist service approach.
                    </p>
                    <h>Our Mission</h>
                    <p>
                    To offer our guests a unique accommodation experience by keeping guest satisfaction at the highest level.
                    </p>
                    <h>Our Values</h>
                    <p>
                    To implement a policy of equality and tolerance, prioritizing human health and safety. Sincerity and transparency.
                    </p>
                </div>
                <div className="about-images">
                    <img src="Images/MISYON.png" alt="Hotel Image" />
                    <img src="Images/VIZYON.png" alt="Hotel Image" />
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default About;

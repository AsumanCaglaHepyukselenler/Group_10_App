// Navbar.js
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faBook, faPhone, faUser, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import "./navbar.css";

const Navbar = ({ isLoggedIn }) => {
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    const handleLogout = () => {
        // Logout işlemi burada gerçekleştirilebilir
    };

    return (
        <div className="navbar">
            <div className="navContainer">
                <span className="logo">ReservEase Booking</span>
                <div className="navItems">
                    <div className="navList">
                        <Link to="/" className="navLink navListItem">
                            <FontAwesomeIcon icon={faBed} className="navIcon" />
                            <span>Rooms</span>
                        </Link>
                        <Link to="/hotels" className="navLink navListItem">
                            <FontAwesomeIcon icon={faBook} className="navIcon" />
                            <span>About</span>
                        </Link>
                        <Link to="/contact" className="navLink navListItem">
                            <FontAwesomeIcon icon={faPhone} className="navIcon" />
                            <span>Contact</span>
                        </Link>
                    </div>
                    {isLoggedIn ? (
                        <div className="navItems" onClick={toggleDropdown}>
                        <FontAwesomeIcon icon={faUser} className="navIcon" />
                                <div className="dropDown">
                                {showDropdown && (
                                    <div>
                                        <ul>
                                            <li>Profile</li>
                                            <li>Logout</li>
                                        </ul>
                                    </div>
                                )}
                                </div>
                            </div>
                    ) : (
                        <div className="navButtons">
                            <Link to="/register" className="navLink navButton">Register</Link>
                            <Link to="/login" className="navLink navButton">Login</Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;

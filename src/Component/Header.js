import React from "react"
import { Link } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import { useState } from "react";
import logo from  "../Asset/icons_assets/Logo.svg"

export default function Header() {
    return (
        <header>
            {/* <img src="../Asset/images/logo.png" alt="Lemon Little"/> */}
            <img src={logo} alt="Little Lemon"/>
            <nav>
                <Link to="/">Home</Link>
                <a href="#">Menu</a>
                <Link to="/booking">Booking</Link>
                <a href="#">Contact</a>
            </nav>
        </header>
    )
}
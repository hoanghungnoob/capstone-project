import React from "react"
import { Link } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import { useState } from "react";
import footer from "../Asset/images/footer.png"

export default function Footer() {
    return (
        <footer>
            <div className="footer-content">
                <div className="footer-nav">
                    <h2 className="footer-head">Navigtion</h2>
                    <Link to="/" className="footer-item">Home</Link>
                    <a href="#" className="footer-item">Menu</a>
                    <Link to="/booking" className="footer-item">Reservations</Link>
                    <a href="#" className="footer-item">Login</a>
                </div>
                <div className="footer-contact">
                    <h2 className="footer-head">Contact</h2>
                    <a href="#" className="footer-item">Address</a>
                    <a href="#" className="footer-item">Phone Number</a>
                    <a href="#" className="footer-item">Email</a>
                </div>
                <div className="footer-social">
                    <h2 className="footer-head">Social Media</h2>
                    <a href="#" className="footer-item">Facebook</a>
                    <a href="#" className="footer-item">Instagram</a>
                    <a href="#" className="footer-item">TikTok</a>
                    <a href="#" className="footer-item">Twitter</a>
                </div>
            </div>
        </footer>
    )
}
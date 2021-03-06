import React from 'react';
import './Footer.css';
import {  Link } from "react-router-dom";

export function Footer() {
  return (
    <>
    <footer className="footer">
        <div className="footer-links-container">
            <ul>
                <h2 className="footer-links-heading">SUPPORT</h2>
                <li><Link to={{pathname : '#'}}>Warranty</Link></li>
                <li><Link to={{pathname : '#'}}>Contact Us</Link></li>
                <li><Link to={{pathname : '#'}}>FAQs</Link></li>
                <li><Link to={{pathname : '#'}}>Shipping Policy</Link></li>
                <li><Link to={{pathname : '#'}}>Payments</Link></li>
                <li><Link to={{pathname : '#'}}>Cancellations & Returns</Link></li>
            </ul>

            <ul>
                <h2 className="footer-links-heading">About Us</h2>
                <li><Link to={{pathname:'#'}}>Corporate Profile</Link></li>
                <li><Link to={{pathname:'#'}}>Videos</Link></li>
                <li><Link to={{pathname:'#'}}>Stores</Link></li>
            </ul>

            <ul>
                <h2 className="footer-links-heading">Policy</h2>
                <li><Link to={{pathname:'#'}}>Privacy Policy</Link></li>
                <li><Link to={{pathname:'#'}}>Terms & Conditions</Link></li>
            </ul>

            <ul>
                <h2 className="footer-links-heading">Follow Us</h2>
                <div className="social-media-links">
                    <li><a href="https://www.facebook.com/omkar.patke.1/" target="_blank" rel="noopener noreferrer" className="facebook-link"><i className="lni lni-facebook-original"></i></a></li>
                    <li><a href="https://twitter.com/omkar_patke" target="_blank" rel="noopener noreferrer" className="twitter-link"><i className="lni lni-twitter-original"></i></a></li>
                    <li><a href="https://www.linkedin.com/in/omkar-patke-a61b221ab/" className="linkedIn-link" target="_blank" rel="noopener noreferrer"><i className="lni lni-linkedin-original"></i></a></li>
                </div>
            </ul>
        </div>

    </footer>
    </>
  )
}

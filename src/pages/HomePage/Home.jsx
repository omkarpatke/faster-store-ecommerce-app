import React from 'react';
import './Home.css';
import {  Link } from "react-router-dom";
import homeImg from '../../Images/homeImg.jpg';

export default function Home() {
  return (
    <>
    <div className="main-section">
        <img className="img desk-img" src={homeImg} alt="cycleImg"/>

        <div className="guide-container">
            <h2 className='container-heading'>Cycle Guide</h2>
            <div className="guide-content-container">
                <div className="cycle img">
                    <Link to='/products'>
                        <img className="top-selling-cycle-img" src="https://trackandtrail.in/sites/all/themes/adaptivetheme/at_subtheme/images/cycle-guide-banner.png" alt="guide-cycle-img"/>
                    </Link>
                </div>
    
                <div className="guide-info">
                    <h2 className="guide-heading">LET US<span><h1>HELP</h1></span> YOU PICK </h2>
                    <h4 className="guide-desc">Our cycle guide can help you narrow 
                        your search.</h4>
                    <Link to='/products' className="btn link-btn">Get Started</Link>
                </div>
            </div>
        </div>

        <div className="top-selling-cycle-container">
            <h2 className='container-heading'>Top Selling Cycles</h2>
            <div className="top-selling-cycles">
                <div className="cycle img">
                    <Link to='/products'>
                        <img className="top-selling-cycle-img" src="https://www.trackandtrail.in/sites/default/files/Mach-City_1.png" alt="top-selling-cycles"/>
                    </Link>
                </div>
    
                <div className="top-cycles-info">
                    <img src="https://www.trackandtrail.in/sites/default/files/styles/brand_logo/public/Machcity%20New%20Logo.png?itok=85MxtsOZ" alt="Mach City"/>
                    <h4 className="cycle-desc">Mach City iBike Single Speed Medium Matt Black</h4>
                    <h4 className="cycle-price">MRP: 9,170</h4>
                    <Link to='/products' className="btn link-btn">Details</Link>
                </div>
            </div>
        </div>

    </div>

    </>
  );
}

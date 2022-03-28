import React from 'react';
import './Navbar.css';
import NavLogo from '../../Images/cycle-favicon.png';
import ProfileImg from '../../Images/pngwing.com.png';
import {  Link } from "react-router-dom";
import { useWishlist } from '../../context/wishlist-context';

export default function Navbar() {

    let state = useWishlist();
    let wishlistLength
    if(state.wishlistState.type === 'ADD_TO_WISHLIST'){
      wishlistLength = state.wishlistState.payload.length
    }else if(state.wishlistState.type === 'ADD_TO_WISHLIST' || state.wishlistState.payload === 'none'){
        wishlistLength = 0;
    }

  return (
    <>
    <div className="sub-header">
        <div className="login-links">
            <Link to='/sign-in'> SignIn </Link> |
            <Link to='/sign-up'> SignUp </Link> 
        </div>
    </div>
    <nav className="navbar">
        <div className="nav-brand">
        <Link to='/products' className='nav-brand-name'> Faster Cycle Store </Link> 
        <Link to=''><img src={NavLogo} alt="brand-img" className="nav-brand-img" /></Link> 
        </div>
       <div className="nav-contents">
        <div className="search-bar">
            <input type="text" placeholder="Search" className="search-input"/>
        </div>

        <div className="wishlist">
            <Link to='/wishlist' className="nav-wishlist-icon" title="WishList"><i className="lni lni-heart"></i></Link>
            <span className="wishlist-items-number">{wishlistLength}</span>
        </div>

        <div className="cart">
            <Link to='/cart' className="cart-icon" title="Cart"><i className="lni lni-cart-full"></i></Link>
            <span className="cart-items-number">3</span>
        </div>

        <div className="user-profile">
            <Link to='user-profile' title="User-Profile"><img className="user-profile-icon" src={ProfileImg} alt="user-profile"/></Link>
        </div>
       </div>
    </nav>
    </>
  )
}

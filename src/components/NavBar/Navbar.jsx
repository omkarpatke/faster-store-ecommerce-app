import React from 'react';
import './Navbar.css';
import NavLogo from '../../Images/cycle-favicon.png';
import ProfileImg from '../../Images/pngwing.com.png';
import {  Link , useNavigate } from "react-router-dom";
import { useUserAuth, useToastContext , useProducts} from '../../context/index';
import { useSelector } from 'react-redux';

export function Navbar({showSearchBar}) {
    const { isLogIn , setIsLogIn , userData , setUserData } = useUserAuth();
    const { name } = userData; 
    const { productDispatch } = useProducts();
    const notify = useToastContext();
    const navigate = useNavigate();
   const { cart , wishlist } = useSelector(state => state);



    const logoutHandler = () => {
        notify('You Are Successfully Logout!' , {type:'success'});
        setIsLogIn(false);
        localStorage.clear();
        setUserData('');
        navigate('/');
     }


  return (
    <>
    <div className="sub-header">
        <div className="login-links">
            {!isLogIn ? 
            <div><Link to='/sign-in'> SignIn </Link> <span className='vertical-divider'>|</span>
            <Link to='/sign-up'> SignUp </Link></div> : <div onClick={logoutHandler} className='logout-btn'> Logout </div>} 
        </div>
    </div>
    <nav className="navbar">
        <div className="nav-brand">
        <Link to='/products' className='nav-brand-name'> Faster Cycle Store </Link> 
        <Link to='/'><img src={NavLogo} alt="brand-img" className="nav-brand-img" /></Link> 
        </div>
       <div className="nav-contents">
        {showSearchBar
        ? <div className="search-bar">
            <input type="search" placeholder="Search" className="search-input" onChange={(e) => productDispatch({type:'SEARCH_INPUT' , payload: e.target.value })}/>
        </div>
        : ''
        }

        <div className="wishlist">
            <Link to='/wishlist' className="nav-wishlist-icon" title="WishList"><i className="lni lni-heart"></i></Link>
            <span className="wishlist-items-number">{isLogIn ? wishlist.length : '0'}</span>
        </div>

        <div className="cart">
            <Link to='/cart' className="cart-icon" title="Cart"><i className="lni lni-cart-full"></i></Link>
            <span className="cart-items-number">{isLogIn ? cart.length : '0'}</span>
        </div>

        <div className="user-profile">
            {name
             ? <Link to='/user-profile' title="User-Profile" className='user-icon'>{name && name.split('')[0].toUpperCase()}</Link>
             : <Link to='/user-profile' title="User-Profile"><img className="user-profile-icon" src={ProfileImg} alt="user-profile"/></Link>
            }
        </div>
       </div>
    </nav>
    </>
  )
}

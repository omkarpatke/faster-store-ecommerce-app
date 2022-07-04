import React from 'react';
import './ProfilePage.css';
import { Link } from 'react-router-dom'
import { useUserAuth } from '../../context/index';
import ProfileImg from '../../Images/pngwing.com.png';
import { Navbar } from '../../components';

export function ProfilePage() {
  const { userData } = useUserAuth();
  const {name , lastName , email } = userData;
  return (
    <>
    <Navbar showSearchBar={false}/>
    <div className="profile-container">
        <div className="profile-cart">
          {name 
          ? <div className="profile-img">{name.split('')[0].toUpperCase()}</div>
          : <div><img className="profile-img userIcon" src={ProfileImg} alt="user-profile"/></div>
          }

          <div className="userData">
            <div className="user-name">
                Name : {name}
            </div>

            <div className="lastName">
              LastName : {lastName}
            </div>

            <div className="useremail">
              Email : {email}
            </div>
            <Link to='/products' className='btn outline-primary-btn' >Back To Shopping</Link>
            </div>
        </div>
    </div>
    </>
  )
}

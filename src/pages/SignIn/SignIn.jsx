import React , { useState } from 'react';
import axios from 'axios';
import './SignIn.css';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useUserAuth, useToastContext } from '../../context/index';
import { Navbar } from '../../components';


export function SignIn() {
  const navigate = useNavigate();
   const [email , setEmail] = useState();
   const [password , setPassword] = useState();
   const { setIsLogIn , setUserData } = useUserAuth();  
   const location = useLocation();
   const from = location.state?.from?.pathname || "/" ;
   const notify  = useToastContext();
   const [hidePassword , setHidepassword] = useState(true); 

   const loginHandler = async(e) => {
     e.preventDefault();
     if(email && password){
      try {
        const response = await axios.post(`/api/auth/login`, {
          email , password
        });
        if(response.status === 200){
          localStorage.setItem("token", response.data.encodedToken);
          let getTokenFromLocalStorage = localStorage.getItem('token')
          if(getTokenFromLocalStorage){
            notify('You Are Successfully Login!',{type:'success'});
            setIsLogIn(true);
            setUserData({email ,password , name:'guestName' , lastName: 'guestLastName'});
            navigate(from , {replace:true});
          }
        } 
      } catch (err) {
        notify("The email you entered is not Registered. Please SignUp!",{type:'warning'});
      }
     }else{
      notify('Enter Empty Fields',{type:'warning'});
     }

  }

  const guestLoginHandler = async() => {
    try {
      const response = await axios.post(`/api/auth/login`, {
        email:'guest1234@gmail.com' ,password:'guest1234'
      });
      if(response.status === 200){
        localStorage.setItem("token", response.data.encodedToken);
        let getTokenFromLocalStorage = localStorage.getItem('token')
        if(getTokenFromLocalStorage){
          notify('You Are Successfully Login!',{type:'success'});
          setIsLogIn(true);
          setUserData({email:'guest1234@gmail.com' ,password:'guest1234' , name : 'guestName' , lastName: 'guestLastName'});
          navigate(from , {replace:true});
        }
      } 
    } catch (err) {
      notify("The email you entered is not Registered. Please SignUp!",{type:'warning'});
    } 
  }

  return (
    <>
    <Navbar showSearchBar={false}/>
    <div className="login-container">
        <h3 className="login-heading">Account Information</h3>
        <div className="login-card">
            <h2>LogIn</h2>
            <form className="logIn-form" onSubmit={loginHandler}>
            <label htmlFor='login-eamil-input' aria-required="true">E-mail address<span>*</span></label>
                <input type="email" placeholder='johncena@gmail.com' name="user-email" required id="login-eamil-input" value={email} onChange={ event => setEmail(event.target.value)}/>

                <label htmlFor="login-password" aria-required="true">Password<span>*</span></label>
                <input className='password-input' type={hidePassword ? "password" : 'text'} placeholder='********' name="login-password" required id="login-password" value={password} onChange={ event => setPassword(event.target.value)}/>
                <i className={ hidePassword ? 'bi bi-eye-slash eye-icon' : 'bi bi-eye eye-icon'} id="togglePassword" onClick={() => setHidepassword(prev => !prev)}></i>


                <button className="login-btn" type="submit" onClick={loginHandler}> Login In </button>
            </form>
            <button className="login-btn" type="submit" onClick={guestLoginHandler}> Login as Guest </button>
            <p>I Don't Have An Account</p>
            <Link to='/sign-up'>CREATE AN ACCOUNT</Link>
        </div>
    </div>
    </>
  )
}

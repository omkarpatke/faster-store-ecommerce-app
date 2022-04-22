import './SignUp.css';
import React , { useState } from 'react';
import { Link , useNavigate , useLocation } from 'react-router-dom';
import axios from 'axios';

import { useUserAuth, useToastContext } from '../../context/index';

import { useUserAuth } from '../../context/userAuth-context';
import { useToastContext } from '../../context/toastContext';



export function SignUp() {
  const [name , setName] = useState('');
  const [email , setEmail] = useState('');
  const [password , setPassword] = useState('');
  const [lastName , setLastName] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const {setIsLogIn } = useUserAuth();
  const notify = useToastContext(); 

  const signupHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`/api/auth/signup`, ({
        firstName: name,
        lastName: lastName,
        email: email,
        password: password,
      }));
      // saving the encodedToken in the localStorage
      if(response.status === 201){
      localStorage.setItem("token", response.data.encodedToken);

      notify('You Are Successfully Signup!' , {type:'info'});

      notify('You Are Successfully Signup!' , {type:'success'});

      setIsLogIn(true);
      navigate(from , { replace:true });
      }
    } catch (error) {
      notify("error" , {type:'error'});

    if(name && lastName && email && password){

   if(name && lastName && email && password){

      try {
        const response = await axios.post(`/api/auth/signup`, ({
          firstName: name,
          lastName: lastName,
          email: email,
          password: password,
        }));
        // saving the encodedToken in the localStorage
        if(response.status === 201){
        localStorage.setItem("token", response.data.encodedToken);
        setIsLogIn(true);
        navigate(from , { replace:true });
        }
      } catch (err) {
        console.error(err);
      }
    }else{
      alert('Enter Empty Fields');

    }
  }}
  return (
    <>
    <div className="login-container">
        <h3 className='login-container-heading'>Account Information</h3>
        <div className="login-card">
            <h2>Sign Up</h2>
            <form className="logIn-form">
                <label htmlFor="first-name" aria-required="true">First Name<span>*</span></label>
                <input type="text" name="first-name" required id="first-name" value={name} onChange={ event => setName(event.target.value)}/>

                <label htmlFor="last-name" aria-required="true"> Last Name<span>*</span></label>
                <input type="text" name="last-name" required id="last-name" value={lastName} onChange={ event => setLastName(event.target.value)}/>

                <label htmlFor='login-eamil-input' aria-required="true">E-mail address<span>*</span></label>
                <input type="email" name="user-email" required id="login-eamil-input" value={email} onChange={ event => setEmail(event.target.value)}/>

                <label htmlFor="login-password" aria-required="true">Password<span>*</span></label>
                <input type="password" name="login-password" required id="login-password" value={password} onChange={ event => setPassword(event.target.value)}/>

                <button className="login-btn" type="submit" onClick={(event) => signupHandler(event)}> Sign Up </button>
            </form>
            <Link to="/sign-in">Already have an Account?</Link>
            <h2>OR</h2>
            <button className="signUp-with-google-btn"><i className="lni lni-google"></i> <span>Sign in with google</span></button>
        </div>
    </div>
    </>
  )
}


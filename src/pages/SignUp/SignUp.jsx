import React from 'react';
import './SignUp.css';

export default function SignUp() {
  return (
    <>
    <div className="login-container">
        <h3>Account Information</h3>
        <div className="login-card">
            <h2>Sign Up</h2>
            <form className="logIn-form">
                <label for="full-name" aria-required="true">Full Name<span>*</span></label>
                <input type="text" name="ful-name" id="full-name"/>

                <label for="email" aria-required="true">E-mail address<span>*</span></label>
                <input type="email" name="user-email" id="login-eamil-input"/>

                <label for="password" aria-required="true">Password<span>*</span></label>
                <input type="password" name="login-password" id="login-password"/>

                <label for="password" aria-required="true"> Confirm Password<span>*</span></label>
                <input type="password" name="login-confirm-password" id="login-confirm-password"/>

                <button className="login-btn" type="submit"> Sign Up </button>
            </form>
            <h2>OR</h2>
            <button className="signUp-with-google-btn"><i className="lni lni-google"></i> <span>Sign in with google</span></button>
        </div>
    </div>
    </>
  )
}

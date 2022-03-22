import React from 'react';
import './SignIn.css';

export default function SignIn() {
  return (
    <>
    <div className="login-container">
        <h3 className="login-heading">Account Information</h3>
        <div className="login-card">
            <h2>Sign In</h2>
            <form className="logIn-form">
                <label for="email" aria-required="true">E-mail address<span>*</span></label>
                <input type="email" name="user-email" id="login-eamil-input"/>

                <label for="password" aria-required="true">Password<span>*</span></label>
                <input type="password" name="login-password" id="login-password"/>

                <button className="forgot-password-link">Forgot your password?</button>

                <button className="login-btn" type="submit"> Sign In </button>
            </form>
            <h2>OR</h2>
            <button className="signIn-with-google-btn"><i className="lni lni-google"></i> <span>Sign in with google</span></button>

            <p>I Don't Have An Account</p>
            <a href="/components/signUp/signUp.html">CREATE AN ACCOUNT</a>
        </div>
    </div>
    </>
  )
}

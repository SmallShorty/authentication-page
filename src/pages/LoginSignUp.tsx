import React from 'react';
import '../styles/LoginSignUp.css'
import BackgroundLoginPage from "../components/BackgroundLoginPage";

function LoginSignUp() {
    return (
        <>
            <div className="container">
                <h1 className="header">Welcome Back</h1>
                <input type="text" placeholder="Phone, email" className="input login"/>
                <input type="password" placeholder="Password" className="input password"/>
                <div className="help__bar">
                    <a href="#">Forgot password?</a>
                </div>
                <button className="sign in">Sign in</button>
                <button className="sign up">Register</button>
            </div>
            <BackgroundLoginPage></BackgroundLoginPage>
        </>

    );
}

export default LoginSignUp;
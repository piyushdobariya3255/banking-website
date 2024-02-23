import React, { useState } from 'react'
import '../style-css/Signup_Signin.css'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Footer from './Footer';

function Signup_Signin() {

    const navigate = useNavigate();


    const [isSignUpMode, setSignUpMode] = useState(false);
    const [isSignUpMode2, setSignUpMode2] = useState(false);
    const toggleSignUpMode = () => {
        setSignUpMode(true);
        setSignUpMode2(false);
    };

    const toggleSignInMode = () => {
        setSignUpMode(false);
        setSignUpMode2(false);
    };

    const toggleSignUpMode2 = () => {
        setSignUpMode(false);
        setSignUpMode2(true);
    };

    const toggleSignInMode2 = () => {
        setSignUpMode2(false);
        setSignUpMode(false);
    };


    return (
        <>
            <Navbar></Navbar>
            <div className='Sign_Login'>
                <div className={`container ${isSignUpMode ? 'sign-up-mode' : ''} ${isSignUpMode2 ? 'sign-up-mode2' : ''}`}>
                    <div className="signin-signup">
                        <form action="" className="sign-in-form">
                            <h2 className="title">Sign in</h2>
                            <div className="input-field">
                                <i className="fas fa-envelope"></i>
                                <input type="text" placeholder="Email" />
                            </div>
                            <div className="input-field">
                                <i className="fas fa-lock"></i>
                                <input type="password" placeholder="Password" />
                            </div>
                            <input type="button" value="Login" className="btn" onClick={toggleSignInMode} />

                            <p className="account-text">Don't have an account? <a href="/" id="sign-up-btn2">Sign up</a></p>
                        </form>
                        <form  action="" className="sign-up-form">
                            <h2 className="title">Sign up</h2>
                            <div className="input-field">
                                <i className="fas fa-user"></i>
                                <input  type="text" placeholder="First Name" />
                            </div>
                            <div className="input-field">
                                <i className="fas fa-user"></i>
                                <input  type="text" placeholder="Last Name" />
                            </div>
                            <div className="input-field">
                                <i className="fas fa-envelope"></i>
                                <input  type="text" placeholder="Email" />
                            </div>
                            <div className="input-field">
                                <i className="fas fa-lock"></i>
                                <input  type="password" placeholder="Password" />
                            </div>
                            <div className="input-field">
                                <i className="fas fa-lock"></i>
                                <input  type="password" placeholder="Confirm - password" />
                            </div>
                            <input type="button" value="Sign up"  className="btn" onClick={toggleSignUpMode}/>


                        </form>
                    </div>
                    <div className="panels-container">
                        <div className="panel left-panel">
                            <div className="content" >
                                <h3>Member of Brand?</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque accusantium dolor, eos incidunt minima iure?</p>
                                <button className="btn" id="sign-in-btn" onClick={toggleSignInMode}>Sign in</button>
                            </div>
                            <img src="signin.svg" alt="" className="image" />
                        </div>
                        <div className="panel right-panel">
                            <div className="content" >
                                <h3>New to Brand?</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque accusantium dolor, eos incidunt minima iure?</p>
                                <button className="btn" id="sign-up-btn" onClick={toggleSignUpMode}>Sign up</button>
                            </div>
                            <img src="signup.svg" alt="" className="image" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup_Signin

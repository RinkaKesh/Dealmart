import React from 'react';
import style from "./Signup.module.css";
import login from "../../../public/login/signup.webp";
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className={style.signup_root}>
            <div className={style.signup_container}>
                <div className={style.left}>
                    <div>
                        <ul className={style.signup_text}>
                            Looks like you're new here!
                            <li>Sign Up fast and Start Shopping!</li>
                        </ul>
                    </div>
                    <img src={login} alt="" className={style.signup} />
                </div>
                <div className={style.right}>
                    <form action="">
                        <label htmlFor="email">Enter Email</label>
                        <input type="email" id="email" />
                        <label htmlFor="password">Enter Password</label>
                        <input type="password" id="password" />

                        <label>Select Gender</label>
                        <div className={style.gender_container}>

                            <label htmlFor="male" >
                               <input type="radio" className={style.gender} name='gender' id="male" />
                                Male 
                            </label>
                            <label htmlFor="female" >
                                <input type="radio" className={style.gender} name='gender' id="female" />
                                Female
                            </label>
                            <label htmlFor="others" >
                                <input type="radio" className={style.gender} name='gender' id="others" />
                                Others
                            </label>
                        </div>
                        
                        <p>By continuing, you agree to Dealmart's <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a>.</p>
                        <button type="submit">CONTINUE</button>
                    </form>
            
                    <Link className={style.existing_account} to="/login">Existing User? Log In</Link>
                </div>
            </div>
        </div>
    );
}

export default SignUp;

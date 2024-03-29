import React from 'react'
import style from "./Signup.module.css"
import login from "../../../public/login/signup.webp"
import { Link } from 'react-router-dom'


const SignUp = () => {
    return (
        <div className={style.signup_root}>
        <div className={style.signup_container}>
            <div className={style.left}>
                <ul className={style.signup_text}>Looks like you're <br />new here!
                  <li>Sign Up fast and Start Shopping!</li>
                </ul>
                
                <img src={login} alt="" className={style.signup} />
               
            </div>
            <div className={style.right}>
                <form action="">
                    <label htmlFor="">Enter Email</label>
                    <input type="email"  />
                    <br />
                    <label htmlFor="">Enter Password</label>
                    <input type="password" /><br />
                    <label htmlFor="">Select Gender</label>
                    <div className={style.gender_container}>
                       <div><input type="radio" className={style.gender} name='gender' />Male </div>
                        <div><input type="radio" className={style.gender} name='gender'/>Female</div>
                         <div> <input type="radio" className={style.gender} name='gender'/>Others</div>
                    </div>    <br />
                    <p>By continuing, you agree to Dealmart's <a href="">Terms of Use</a> and <a href="">Privacy Policy</a>.</p>
                    <button>CONTINUE</button>
                </form> <br /><br />
                <Link className={style.existing_account} to="/login">Existing User? Log In</Link>
            </div>
        </div>
        </div>
      )
}

export default SignUp
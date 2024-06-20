import React from 'react';
import style from "./SignIn.module.css";
import login from "../../../public/login/login9.jpg";
import { Link } from 'react-router-dom';

export const SignIn = () => {
  return (
    <div className={style.signin_container}>
      <div className={style.left}>
        <div className={style.login_text}>
          <ul>
            Login
            <li>Get access to your Orders,</li>
              <li>Wishlist and Recommendations</li>
          </ul>
        </div>
        <img src={login} alt="Login" />
      </div>
      <div className={style.right}>
        <form>
          <label htmlFor="email">Enter Email</label>
          <input type="email" name='email' id='email' />
           
          <label htmlFor="password">Enter Password</label>
          <input type="password" name='password' id='password' />
          <p>By continuing, you agree to Dealmart's <a href="">Terms of Use</a> and <a href="">Privacy Policy</a>.</p>
          <button type="submit">Login</button>
        </form> 
        <Link className={style.new_account} to="/register">New to Dealmart? Create an account</Link>
      </div>
    </div>
  );
};

export default SignIn;

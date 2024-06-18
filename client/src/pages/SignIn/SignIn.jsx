import React from 'react';
import style from "./SignIn.module.css";
import login from "../../../public/login/login9.jpg";
import { Link, useNavigate } from 'react-router-dom';

export const SignIn = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate('/product');
  };

  return (
    <div className={style.signin_root}>
      <div className={style.signin_container}>
        <div className={style.left}>
          <ul className={style.login_text}>Login
            <li>Get access to your Orders, <br />Wishlist and Recommendations</li>
          </ul>
          <img src={login} alt="Login" className={style.login} />
        </div>
        <div className={style.right}>
          <form action="">
            <label htmlFor="email">Enter Email</label><br />
            <input type="email" id="email" /><br /><br />
            <label htmlFor="password">Enter Password</label><br />
            <input type="password" id="password" /><br /><br />
            <p>By continuing, you agree to Dealmart's <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a>.</p>
            <button type="button" onClick={handleLogin}>Login</button>
          </form>
          <Link className={style.new_account} to="/register">New to Dealmart? Create an account</Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

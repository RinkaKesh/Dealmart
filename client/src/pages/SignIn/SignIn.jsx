import React,{useState} from 'react';
import style from "./SignIn.module.css";
import login from "../../../public/login/login9.jpg";
import { Link } from 'react-router-dom';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

export const SignIn = () => {
  const navigate=useNavigate()
  const defaultFormdata={email:"",password:""}
  const [formdata,setFormdata]=useState(defaultFormdata)

  const handleSubmit=async(e)=>{
      e.preventDefault()
      // console.log(formdata)
      try {
          const res = await axios.post("http://localhost:8080/user/login", formdata, { withCredentials: true });
           if(res.status===200){
              alert(res.data.message)
              setTimeout(()=>{
                navigate("/product")
              },700)
              console.log(res.data.message);
           }
      } catch (error) {
          console.log(error);
          if (error.response) {
              const { status,data } = error.response;
              if (data) {
               alert(`${status} ! ${data.error}`)
            } else {
              console.error(error);
            }
          }
      }
      
  }
  const handleChange=(e)=>{
    const {name,value}=e.target 
    setFormdata({...formdata,[name]:value})
}
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
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Enter Email</label>
          <input type="email" id="email" value={formdata.email} onChange={handleChange} name='email'  />
           
          <label htmlFor="password">Enter Password</label>
          <input type="password" id="password" value={formdata.password} onChange={handleChange} name='password'/>
          <p>By continuing, you agree to Dealmart's <a href="">Terms of Use</a> and <a href="">Privacy Policy</a>.</p>
          <button type="submit">Login</button>
        </form> 
        <Link className={style.new_account} to="/register">New to Dealmart? Create an account</Link>
      </div>
    </div>
  );
};

export default SignIn;

import React, { useState } from 'react';
import style from "./Signup.module.css";
import login from "../../../public/login/signup.webp";
import { Link ,useNavigate} from 'react-router-dom';
import axios from 'axios'

const SignUp = () => {
    const navigate=useNavigate()
    const defaultFormdata={name:"",email:"",gender:"",password:""}
    const [formdata,setFormdata]=useState(defaultFormdata)

    const handleSubmit=async(e)=>{
        e.preventDefault()
        // console.log(formdata)
        try {
            const res = await axios.post("http://localhost:8080/user/register", formdata, { withCredentials: true });
             if(res.status===200){
                alert(res.data.message)
                console.log(res.data.message);
                setTimeout(()=>{
                  navigate("/login")
                },500)
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
        setFormdata(defaultFormdata)
        
    }

    const handleChange=(e)=>{
        const {name,value,type,checked}=e.target 
        const inputValue = type === "checkbox" ? checked : value;
        setFormdata({...formdata,[name]:inputValue})
    }
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

                    <form action="" onSubmit={handleSubmit}>
                        <label htmlFor="email">Enter Full Name</label>
                        <input type="text" id="name" value={formdata.name} onChange={handleChange} name='name' placeholder='Enter Full Name'/>
                        <label htmlFor="email">Enter Email</label>
                        <input type="email" id="email" value={formdata.email} onChange={handleChange} name='email' placeholder='example@email.com'/>
                        <label htmlFor="password">Enter Password</label>
                        <input type="password" id="password" value={formdata.password} onChange={handleChange} name='password' placeholder='Enter Password'/>

                        <label>Select Gender</label>
                        <div className={style.gender_container}>

                            <label htmlFor="male" >
                                <input type="radio" className={style.gender} name='gender' id="male" value="male" checked={formdata.gender === "male"} onChange={handleChange}/>
                                Male
                            </label>
                            <label htmlFor="female" >
                                <input type="radio" className={style.gender} name='gender' id="female" value="female"  checked={formdata.gender === "female"} onChange={handleChange}/>
                                Female
                            </label>
                            <label htmlFor="other" >
                                <input type="radio" className={style.gender} name='gender' id="other" value="other"  checked={formdata.gender === "other"} onChange={handleChange}/>
                                Other
                            </label>
                        </div>

                        <p>By continuing, you agree to Dealmart's <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a>.</p>
                        <button type="submit" >CONTINUE</button>
                    </form>

                    <Link className={style.existing_account} to="/login">Existing User? Log In</Link>
                </div>
            </div>
        </div>
    );
}

export default SignUp;

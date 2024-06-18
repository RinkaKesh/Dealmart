import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
import style from "./Navbar.module.css"
import logo from "../../../public/dealmart.png"
import { IoPersonSharp } from "react-icons/io5";
import { BsCart4 } from "react-icons/bs";
import { PiGiftBold } from "react-icons/pi"
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className={style.navbar_container}>
            <ul className={style.Navbar}>
                <li><img src={logo} alt="logo" className={style.logo} /></li>
                <li className={style.search_container}><IoSearchOutline className={style.search_icon} /><input type="text" className={style.search_input} placeholder='Search Products...' maxLength={15} /></li>
                <li className={style.user_container}><Link to="/login"><IoPersonSharp/>Login</Link></li>
                <li className={style.cart_container}><Link to="/cart"><BsCart4/>Cart</Link></li>
                <li className={style.seller_container}><Link><PiGiftBold/>Become a Seller</Link></li>
            </ul>
        </div>
    )
}

export default Navbar
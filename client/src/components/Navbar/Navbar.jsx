import React,{useState} from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';
import { IoSearchOutline } from "react-icons/io5";
import styles from "./Navbar.module.css"
import logo from "../../../public/dealmart.png"
import { IoPersonSharp } from "react-icons/io5";
import { BsCart4 } from "react-icons/bs";
import { PiGiftBold } from "react-icons/pi"
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className={styles.navbar}>
            <img src="public/dealmart.png" alt="logo" />
            <div className={styles.menu}>
                <div>
                    {menuOpen ? (
                        <FaTimes className={styles.menuBtn} onClick={() => setMenuOpen(!menuOpen)} />
                    ) : (
                        <FaBars className={styles.menuBtn} onClick={() => setMenuOpen(!menuOpen)} />
                    )}
                </div>
                <ul
                    className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
                    onClick={() => setMenuOpen(false)}
                >
                    <li className={styles.user_container}><Link to="/login"><IoPersonSharp />Login</Link></li>
                    <li className={styles.cart_container}><Link to="/cart"><BsCart4 />Cart</Link></li>
                    <li className={styles.seller_container}><Link><PiGiftBold />Become a Seller</Link></li>
                </ul>
            </div>
        </nav>
    );
};



export default Navbar
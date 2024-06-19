import React from 'react';
import style from "./FooterTop.module.css";

const FooterTop = () => {
    return (
        <div className={style.footertop_container}>
            <div className={style.footertop_left_container}>
            <div>
                    <h5>CONSUMER POLICY</h5>
                    <a href='#'>Cancellation & Returns</a>
                    <a href='#'>Terms Of Use</a>
                    <a href='#'>Security</a>
                    <a href='#'>Privacy</a>
                    <a href='#'>Sitemap</a>
                </div>
                <div>
                    <h5>ABOUT</h5>
                    <a href='#'>Contact Us</a>
                    <a href='#'>About Us</a>
                    <a href='#'>Careers</a>
                    <a href='#'>Dealmart Stories</a>
                    <a href='#'>Press</a>
                    <a href='#'>Corporate Information</a>
                </div>
                
                <div>
                    <h5>HELP</h5>
                    <a href='#'>Payments</a>
                    <a href='#'>Shipping</a>
                    <a href='#'>Cancellation & Returns</a>
                    <a href='#'>FAQ</a>
                    <a href='#'>Report Infringement</a>
                </div>
                
            </div>

            <div className={style.footertop_right_container}>
                <div>
                    <h5>Mail Us</h5>
                    <ul>
                        <li>Dealmart Private Limited</li>
                        <li>Bonsujapur Village</li>
                        <li>Bardhaman, 713406</li>
                        <li>West Bengal, India</li>
                    </ul>
                </div>
                <div>
                    <h5>Office Address</h5>
                    <ul>
                        <li>Dealmart Private Limited</li>
                        {/* <li>Bonsujapur Village</li> */}
                        <li>Bardhaman, 713406</li>
                        <li>West Bengal, India</li>
                        <li>Mobile: 9093648754</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default FooterTop;

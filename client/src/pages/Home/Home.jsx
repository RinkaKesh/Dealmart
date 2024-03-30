import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Menubar from '../../components/Menubar/Menubar'
import Slider from '../../components/Slider/Slider'
import Banner from '../../components/Banner/Banner'
import Footer from '../Footer/Footer'
import style from "./Home.module.css"

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Menubar/>
        <Banner/>
        <Slider/>
        <Footer className={style.homepage_footer}/>
    </div>
  )
}

export default Home
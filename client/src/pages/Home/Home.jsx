import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Menubar from '../../components/Menubar/Menubar'
import Slider from '../../components/Slider/Slider'
import Banner from '../../components/Banner/Banner'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Menubar/>
        <Banner/>
        <Slider/>
    </div>
  )
}

export default Home
import React from 'react'
import "./Slider.css"
import Deal from '../Deal/Deal'
import { dealdata } from '../../assets/dealdata'

const Slider = () => {
  return (
    <div className='slider_container'>
        <h1 className='slider_title'>Deal Of The Day</h1>
        <Deal dealtext="Best Deals on Smartphones" data={dealdata}/>
        <Deal dealtext="Best Deals on Home Appliances" data={dealdata}/>
        <Deal dealtext="Best Deals on Laptops" data={dealdata}/>

    </div>
  )
}

export default Slider
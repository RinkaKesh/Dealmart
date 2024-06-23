import React from 'react'
import data from "../../assets/menubarData"
import style from "./Menubar.module.css"
import { useNavigate } from 'react-router-dom'

const Menubar = () => {
  const navigate=useNavigate()
  const handleClick=()=>{
       navigate("/product")
  }
  return (
    <div className={style.card_container}>
      {data.map((ele)=>{
        return <div key={ele.id} className={style.card} onClick={handleClick}>
          <img src={ele.img} alt="" />
          <a href=''>{ele.title}</a>
        </div>
      })}
    </div>
  )
}

export default Menubar
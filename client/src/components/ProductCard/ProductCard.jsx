import React, { useState } from 'react';
import style from "./ProductCard.module.css"
import { Link, useNavigate } from 'react-router-dom'
import { FaHeartCirclePlus } from "react-icons/fa6";
import { MdAddShoppingCart } from "react-icons/md";
import { LuIndianRupee } from "react-icons/lu";


const ProductCard = ({ product }) => {
  const { title, price, image, description, rating,id } = product;

  return (
    <div className={style.product_card}>
      <span className={style.wishlist}><FaHeartCirclePlus className={style.wishlist_icon}/><p>Add to Wishlist</p></span>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      {/* <button className={style.details}>View Details</button> */} 
      <Link  to={`/product/${id}`} >View Details</Link>
      <h4> Price:<LuIndianRupee/> {Math.floor(price*85)}</h4>
      <p>{rating.rate}/5</p>
      <div className={style.button_container}>
      <button> <MdAddShoppingCart className={style.addTocart}/>Add to Cart</button>
      <button>Buy Now</button>
      </div>
      
    </div>
  );
};

export default ProductCard;

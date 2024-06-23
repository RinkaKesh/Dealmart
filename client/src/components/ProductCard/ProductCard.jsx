import React from 'react';
import { Link } from 'react-router-dom';
import { FaHeartCirclePlus } from "react-icons/fa6";
import { MdAddShoppingCart } from "react-icons/md";
import { LuIndianRupee } from "react-icons/lu";
import style from "./ProductCard.module.css";

const ProductCard = ({ product, addToCart,addToWishlist }) => {
  const { title, price, image, rating, id } = product;

  return (
    <div className={style.product_card}>
      <span className={style.wishlist} onClick={() => addToWishlist(product)}>
        <FaHeartCirclePlus className={style.wishlist_icon} />
        <p>Add to Wishlist</p>
      </span>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <Link to={`/product/${id}`}>View Details</Link>
      <h4>Price:<LuIndianRupee /> {Math.floor(price * 85)}</h4>
      <p className={rating.rate >= 3 ? style.good : style.bad}>Rating : {rating.rate}/5</p>
      <div className={style.button_container}>
        <button onClick={() => addToCart(product)}>
          <MdAddShoppingCart className={style.addTocart} />Add to Cart
        </button>
        <button>Buy Now</button>
      </div>
    </div>
  );
};

export default ProductCard;

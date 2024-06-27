import React, { useContext, useState } from 'react';
import { CartContext } from '../../Context/CartProvider';
import { wishlistContext } from '../../Context/wishlistProvider';
import style from "./Wishlist.module.css";
import { AuthContext } from '../../Context/AuthContext';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { IoReturnUpBack } from "react-icons/io5";
import { ItemAddStyleContext } from '../../Context/AddItemStyleProvider'

const Wishlist = () => {
  const { userDetail, isAuth } = useContext(AuthContext);
  const { addToCart, addToCartText } = useContext(CartContext);
  const { ItemAddStyle } = useContext(ItemAddStyleContext)
  const { wishlist, setWishlist, addToWishlistText } = useContext(wishlistContext);
  const [wishlistText, setWishlistText] = useState("");
  const navigate = useNavigate();
  if(!isAuth){
    alert("Please Login First")
    return <Navigate to="/login" />
  }

  const handleRemoveItem = (index) => {
    const updatedWishlist = wishlist.filter((_, i) => i !== index);
    setWishlist(updatedWishlist);
    setWishlistText("Item Removed from Wishlist");
    setTimeout(() => {
      setWishlistText("");
    }, 3000);
  };
  const handleLink = (id) => {
    navigate(`/product/${id}`)
  }

  return (
    <div className={style.wishlist_container}>
      <p style={ItemAddStyle}>{wishlistText}</p>
      <p style={ItemAddStyle}>{addToCartText}</p>
      <div className={style.top_Container}>
        <h1>My Wishlist</h1>
        <Link to="/product" className={style.backLink}> <IoReturnUpBack />Product Page</Link>
        <Link to="/cart"> <IoReturnUpBack />Go to Cart</Link>
      </div>
      <div className={style.username}>
        <h3>Hello, {userDetail.username}</h3>
        <p>Total Items: {wishlist.length}</p>
      </div>

      {wishlist.length === 0 ? (
        <h3 className={style.emptyWishlist}>Your Wishlist is empty.</h3>
      ) : (
        <div className={style.wishlistItems}>
          {wishlist.map((item, index) => (
            <div key={index} className={style.wishlistItem} onClick={()=>handleLink(item.id)}>
              {/* <Link to={`/product/${item.id}`} className={style.link}> */}
              <img src={item.image} alt={item.title} className={style.itemImage} />
              <div className={style.itemInfo}>
                <p className={style.itemTitle}>{item.title}</p>
                <p className={style.itemPrice}>Rs.{Math.floor(item.price * 80)}</p>
              </div>
              <div className={style.itemButtons}>
                <button className={style.removeButton} onClick={(e) =>{ e.stopPropagation();handleRemoveItem(index)}}>Remove</button>
                <button className={style.addButton} onClick={(e) =>{ e.stopPropagation();addToCart(item)}}>Add to cart</button>
              </div>
              <div className={style.goToCartLink}>
                {/* <Link to="/cart" onClick={(e)=>
                  e.preventPropagation()
                }>Go to cart</Link> */}
                 <button onClick={(e) => { e.stopPropagation(); navigate('/cart'); }}>
                  Go to cart
                </button>
              </div>
              {/* </Link> */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;

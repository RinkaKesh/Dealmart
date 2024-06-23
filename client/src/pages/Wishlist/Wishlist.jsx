import React, { useContext, useState } from 'react';
import { CartContext } from '../../Context/CartProvider';
import { wishlistContext } from '../../Context/wishlistProvider';
import style from "./Wishlist.module.css";
import { AuthContext } from '../../Context/AuthContext';
import { Link, Navigate } from 'react-router-dom';
import { IoReturnUpBack } from "react-icons/io5";

const Wishlist = () => {
  const { userDetail, isAuth } = useContext(AuthContext);
  const { addToCart } = useContext(CartContext);
  const { wishlist, setwishlist } = useContext(wishlistContext);
  const [wishlistText, setWishlistText] = useState("");

  // if (!isAuth) {
  //   alert("Please Login First");
  //   return <Navigate to="/login" />;
  // }

  const handleRemoveItem = (index) => {
    const updatedWishlist = wishlist.filter((_, i) => i !== index);
    setwishlist(updatedWishlist);
    setWishlistText("Item Removed from Wishlist");
    setTimeout(() => {
      setWishlistText("");
    }, 3000);
  };

  return (
    <div className={style.wishlist_container}>
      <p className={style.wishlistText}>{wishlistText}</p>
      <div className={style.top_Container}>
        <h1>My Wishlist</h1>
        <Link to="/product" className={style.backLink}> <IoReturnUpBack/>Product Page</Link>
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
            <div key={index} className={style.wishlistItem}>
              <img src={item.image} alt={item.title} className={style.itemImage} />
              <div className={style.itemInfo}>
                <p className={style.itemTitle}>{item.title}</p>
                <p className={style.itemPrice}>${item.price}</p>
              </div>
              <div className={style.itemButtons}>
                <button className={style.removeButton} onClick={() => handleRemoveItem(index)}>Remove</button>
                <button className={style.addButton} onClick={() => addToCart(item)}>Add to cart</button>
              </div>
              <div className={style.goToCartLink}>
                <Link to="/cart">Go to cart</Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;

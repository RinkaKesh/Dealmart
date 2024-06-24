// Cart.js
import React, { useContext, useState } from 'react';
import { CartContext } from '../../Context/CartProvider';
import style from "./Cart.module.css";
import { AuthContext } from '../../Context/AuthContext';
import { Navigate, useNavigate, Link } from 'react-router-dom';
import { IoReturnUpBack } from "react-icons/io5";
import { ItemAddStyleContext } from '../../Context/AddItemStyleProvider'

const Cart = () => {

  const { userDetail, isAuth } = useContext(AuthContext);
  const {ItemAddStyle}=useContext(ItemAddStyleContext)
  const { cart, setCart, getTotalItems } = useContext(CartContext);
  const [cartText, setCartText] = useState(null);
  const navigate = useNavigate();
  if(!isAuth){
    alert("Please Login First")
    return <Navigate to="/login" />
  }

  const calculateTotal = () => {
    return cart.reduce((total, item, index) => {
      const itemPrice = index === 0 ? Math.floor(item.price * 80):Math.floor(item.price*80);
      return Math.floor(total + itemPrice * item.quantity);
    }, 0);
  };

  const handleRemoveItem = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
    setCartText("Item Removed from Cart");
    setTimeout(() => {
      setCartText("");
    }, 3000);
  };

  const handleBuyItem = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
    setCartText("Order Placed Successfully");
    setTimeout(() => {
      setCartText("");
    }, 3000);
  };

  const handlePlaceOrder = () => {
    setCart([]);
    setCartText("Order Placed Successfully");
    setTimeout(() => {
      setCartText("Moving to Product Page");
      setTimeout(() => {
        navigate('/product');
      }, 2000);
    }, 3000);
  };

  const increaseQuantity = (index) => {
    const updatedCart = cart.map((item, i) => 
      i === index ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
  };

  const decreaseQuantity = (index) => {
    const updatedCart = cart.map((item, i) => 
      i === index && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    );
    setCart(updatedCart);
  };

  return (
    <div className={style.cart_container}>
      <p style={ItemAddStyle}>{cartText}</p>
      <div className={style.cart_top_container}>
        <h2>My Cart</h2>
        <Link to="/product"> <IoReturnUpBack />Products</Link>
        <Link to="/wishlist"> <IoReturnUpBack />Wishlist</Link>
      </div>
      <div className={style.username}>
        <h3>Hello, {userDetail.username}</h3>
        <p>Total Items: {getTotalItems()}</p>
      </div>
      {cart.length === 0 ? (
        <h3 className={style.emptyCart}>Your cart is empty.</h3>
      ) : (
        <div>
          <div className={style.cartItems}>
            {cart.map((item, index) => (
              <div key={index} className={style.cart_item}>
                <img src={item.image} alt={item.title} className={style.itemImage} />
                <div className={style.cart_item_info}>
                  <p className={style.cart_item_title}>{item.title}</p>
                  <p className={style.cart_item_price}>Rs.{(Math.floor(item.price * 80))*item.quantity}</p>
                  <div className={style.quantity_container}>
                    <button className={style.quantity_button} onClick={() => decreaseQuantity(index)}>-</button>
                    <span>{item.quantity}</span>
                    <button className={style.quantity_button} onClick={() => increaseQuantity(index)}>+</button>
                  </div>
                </div>
                <div className={style.cart_buttons}>
                  <button className={style.remove_button} onClick={() => handleRemoveItem(index)}>Remove</button>
                  <button className={style.buy_button} onClick={() => handleBuyItem(index)}>Buy</button>
                </div>
              </div>
            ))}
          </div>
          <div className={style.total_price}>
            <h3>Total Price: Rs. {calculateTotal()}</h3>
            <button className={style.order_button} onClick={handlePlaceOrder}>Place Order</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;

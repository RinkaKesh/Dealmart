
// Cart.js
import React, { useContext } from 'react';
import { CartContext } from '../../Context/CartProvider';
import style from "./Cart.module.css";

const Cart = () => {
  const { cart } = useContext(CartContext);

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  const handleRemoveItem = (index) => {
    // Implement logic to remove item from cart
  };

  const handlePlaceOrder = () => {
    // Implement logic to place order
  };

  return (
    <div className={style.cart_container}>
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <h3>Your cart is empty.</h3>
      ) : (
        <>
          {cart.map((item, index) => (
            <div key={index} className={style.cart_item}>
              <img src={item.image} alt={item.title} />
              <div className={style.cart_item_info}>
                <p className={style.cart_item_title}>{item.title}</p>
                <p className={style.cart_item_price}>${item.price}</p>
              </div>
              <div className={style.cart_buttons}>
                <button className={style.remove_button} onClick={() => handleRemoveItem(index)}>Remove</button>
                <button className={style.place_order_button} onClick={handlePlaceOrder}>Buy Now</button>
              </div>
            </div>
          ))}
          <div className={style.cart_order}>
          <p className={style.cart_total}>Total: ${calculateTotal()}</p>
          <button>Place Order</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;

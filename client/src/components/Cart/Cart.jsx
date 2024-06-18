import React, { useContext } from 'react';

import { CartContext } from '../../Context/CartProvider'; // Import context

const Cart = () => {
  const { cartItems } = useContext(CartContext); // Destructure context values

  return (
    <div className={style.cart_container}>
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in the cart</p>
      ) : (
        <ul>
          {cartItems.map(item => (
            <li key={item.id}>
              {item.title} - {item.quantity}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;

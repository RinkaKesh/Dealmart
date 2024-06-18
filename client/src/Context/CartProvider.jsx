// CartContext.js
import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const navigateToCart = () => {
    // Implement navigation logic here, for example using react-router-dom
    // Example:
    // history.push('/cart');
    console.log("Navigate to cart");
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, navigateToCart }}>
      {children}
    </CartContext.Provider>
  );
};

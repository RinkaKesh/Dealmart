// CartContext.js
import React, { createContext, useContext, useState } from 'react';
import { AuthContext } from './AuthContext';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [addToCartText, setAddtoCartText] = useState("");

  const addToCart = (newItem) => {
    setCart(prevCart => {
      const existingItemIndex = prevCart.findIndex(item => item.id === newItem.id);
      if (existingItemIndex >= 0) {
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex].quantity += 1;
        return updatedCart;
      } else {
        return [...prevCart, { ...newItem, quantity: 1 }];
      }
    });
    setAddtoCartText("Item added to cart");
    setTimeout(() => {
      setAddtoCartText("");
    }, 1000);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, setCart, addToCartText, getTotalItems }}>
      {children}
    </CartContext.Provider>
  );
};

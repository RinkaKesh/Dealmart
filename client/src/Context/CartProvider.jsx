// CartContext.js
import React, { createContext, useContext, useState,useEffect } from 'react';
import { AuthContext } from './AuthContext';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const {isAuth}=useContext(AuthContext)
  console.log(`${isAuth} from CartContext`)
  const [cart, setCart] = useState([]);
  const [addToCartText, setAddtoCartText] = useState("");
  useEffect(() => {
    if (isAuth) {
      const storedCartItems = localStorage.getItem('cart');
      if (storedCartItems) {
        setCart(JSON.parse(storedCartItems));
      }
    } else {
      setCart([]); 
    }
  }, [isAuth]);

  useEffect(() => {
    if (isAuth) {
      localStorage.setItem('cart', JSON.stringify(cart));
    } else {
      localStorage.removeItem('cart'); 
    }
  }, [cart, isAuth]);


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

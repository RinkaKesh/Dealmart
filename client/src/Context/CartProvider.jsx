// CartContext.js
import React, { createContext, useContext, useState } from 'react';
import { AuthContext } from './AuthContext';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // const [isClicked,setIsClicked]=useState(false)
  const [cart, setCart] = useState([]);
  const [addToCartText,setAddtoCartText]=useState("")

  const addToCart = (product) => {
    setCart([...cart, product]);
    setAddtoCartText("Item added to cart")
    setTimeout(()=>{
      setAddtoCartText("")
      
    },1200)
    
  };

  const navigateToCart = () => {
    // const {isAuth,userDetail}=useContext(AuthContext)
    // if(!isAuth){
    //   alert("Login First")
    //   return <Navigate to="/login" />;
    // }
    // else{
    //   return <Navigate to="/cart" />;
    // }
    
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, navigateToCart ,setCart,addToCartText}}>
      {children}
    </CartContext.Provider>
  );
};

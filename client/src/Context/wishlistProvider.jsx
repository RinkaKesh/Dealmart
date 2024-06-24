import React, { useState, createContext } from 'react';

export const wishlistContext = createContext();

const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);
  const [addToWishlistText, setAddToWishlistText] = useState("");

  const addToWishlist = (product) => {
    const isAlreadyInWishlist = wishlist.some(item => item.id === product.id);
    if (isAlreadyInWishlist) {
      setAddToWishlistText("Item is already in Wishlist");
    } else {
      setWishlist([...wishlist, product]);
      setAddToWishlistText("Item added to Wishlist");
    }
    setTimeout(() => {
      setAddToWishlistText("");
    }, 1200);
  };

  return (
    <wishlistContext.Provider value={{ wishlist, setWishlist, addToWishlist, addToWishlistText }}>
      {children}
    </wishlistContext.Provider>
  );
};

export default WishlistProvider;

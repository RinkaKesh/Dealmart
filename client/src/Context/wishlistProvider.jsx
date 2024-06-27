import React, { useState, createContext, useEffect } from 'react';

export const wishlistContext = createContext();

const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);
  const [addToWishlistText, setAddToWishlistText] = useState("");

  useEffect(() => {
    const storedWishlist = localStorage.getItem('wishlist');
    if (storedWishlist) {
      setWishlist(JSON.parse(storedWishlist));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

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

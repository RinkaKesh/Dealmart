import React,{useState} from 'react'
import { createContext } from 'react'
export const wishlistContext=createContext()

const WishlistProvider = ({children}) => {
    const [wishlist, setwishlist] = useState([]);
    const [addToWishlistText,setAddtowishlistText]=useState("")

  const addToWishlist = (product) => {
    setwishlist([...wishlist, product]);
    setAddtowishlistText("Item added to Wishlist")
    setTimeout(()=>{
         setAddtowishlistText("")
    },1200)

  };
  return (
    <wishlistContext.Provider value={{wishlist,setwishlist,addToWishlist,addToWishlistText}}>
      {children}
    </wishlistContext.Provider>
  )
}

export default WishlistProvider

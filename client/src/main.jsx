import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import {BrowserRouter} from "react-router-dom"
import { CartProvider } from './Context/CartProvider.jsx';
import AuthContextProvider from './Context/AuthContext.jsx';
import WishlistProvider from './Context/wishlistProvider.jsx';
import AddItemStyleProvider from './Context/AddItemStyleProvider.jsx';




ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthContextProvider>
  <AddItemStyleProvider>
  <WishlistProvider>
  <CartProvider>
   
    <BrowserRouter>
    <App />
    </BrowserRouter>
    
   
  </CartProvider>
  </WishlistProvider>
  </AddItemStyleProvider>
  </AuthContextProvider>,
)

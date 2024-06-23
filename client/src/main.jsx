import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import {BrowserRouter} from "react-router-dom"
import { CartProvider } from './Context/CartProvider.jsx';
import AuthContextProvider from './Context/AuthContext.jsx';
import WishlistProvider from './Context/wishlistProvider.jsx';




ReactDOM.createRoot(document.getElementById('root')).render(
  <WishlistProvider>
  <CartProvider>
    <AuthContextProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </AuthContextProvider>
   
  </CartProvider>
  </WishlistProvider>,
)

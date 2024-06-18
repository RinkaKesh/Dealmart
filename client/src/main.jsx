import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import {BrowserRouter} from "react-router-dom"
import { CartProvider } from './Context/CartProvider.jsx';




ReactDOM.createRoot(document.getElementById('root')).render(
  <CartProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
   
  </CartProvider>,
)

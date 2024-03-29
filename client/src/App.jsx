
import './App.css'
import Home from './pages/Home/Home'
import Product from './pages/Product/Product'
import { SignIn } from './pages/SignIn/SignIn'
import SignUp from './pages/SignUp/SignUp'
import {Routes,Route} from "react-router-dom"
import ProductDetail from './pages/ProductDetail/ProductDetail'




function App() {
 

  return (
    <>
      <Routes>
        <Route path="/"  element={<Home/>}/>
      <Route path='/login' element={<SignIn/>}/>
      <Route path='/register' element={<SignUp/>}/>
      <Route path='/product' element={<Product/>}/>
      <Route path="/product/:productId" element={<ProductDetail/>}  />
    
      </Routes>
       
    </>
  )
}

export default App

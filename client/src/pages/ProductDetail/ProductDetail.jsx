import React, { useContext, useEffect, useState } from 'react';
import { useParams,Link } from 'react-router-dom';
import style from "./ProductDetail.module.css";
import { CartContext } from '../../Context/CartProvider';
import { ItemAddStyleContext } from '../../Context/AddItemStyleProvider'
import { IoReturnUpBack } from "react-icons/io5";
// import { Link } from '@mui/material';

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [expanded, setExpanded] = useState(false);
  const {addToCart,addToCartText}=useContext(CartContext)
  const {ItemAddStyle}=useContext(ItemAddStyleContext)
  const [buyText,setBuyText]=useState("")

  const toggleDescription = () => {
    setExpanded(!expanded);
  };
  const handleBuy=()=>{
     setBuyText("Order Placed Successfully")
     setTimeout(()=>{
      setBuyText("")
     },800)
  }

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
        if (response.ok) {
          const data = await response.json();
          setProduct(data);
        } else {
          throw new Error('Failed to fetch product data');
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchProduct();
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
   <>
   <p style={ItemAddStyle}>{addToCartText}</p>
   <p style={ItemAddStyle}>{buyText}</p>
   
    
    <div className={style.ProductDetail_card}>
    <Link to="/product"><IoReturnUpBack/>Products</Link>
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} />
      <p className={expanded ? style.description + ' ' + style['show-more'] : style.description}>
        {product.description}
      </p>
      {product.description.length > 100 && (
        <p className={style.read_more} onClick={toggleDescription}>
          {expanded ? "...Read Less" : "...Read More"}
        </p>
      )}
      <h4>Price: INR {Math.floor(product.price*80)}</h4>
      <div className={style.button_container}>
        <button onClick={()=>addToCart(product)}>Add to cart</button>
        <button onClick={handleBuy}>Buy Now</button>
      </div>
    </div>
   
    </>
  );
};

export default ProductDetail;

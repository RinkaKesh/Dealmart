// Product.js
import React, { useEffect, useState, useContext } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { IoReturnUpBack } from "react-icons/io5";
import { FaHeartCirclePlus } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import ProductCard from '../../components/ProductCard/ProductCard';
import Sorting from '../../components/Sorting/Sorting';
import style from "./Product.module.css";
import { CartContext } from '../../Context/CartProvider';
import { wishlistContext } from '../../Context/wishlistProvider';
import { ItemAddStyleContext } from '../../Context/AddItemStyleProvider'

const Product = () => {
  const [productData, setProductData] = useState([]);
  const [sortOrder, setSortOrder] = useState('');
  const [category, setCategory] = useState('');
  const {ItemAddStyle}=useContext(ItemAddStyleContext)
  const { addToCart, navigateToCart, cart, addToCartText, getTotalItems } = useContext(CartContext);
  const { wishlist, addToWishlist, addToWishlistText } = useContext(wishlistContext);
  const [buyText,setBuyText]=useState("")

  useEffect(() => {
    async function getProducts() {
      try {
        const res = await fetch("https://fakestoreapi.com/products/");
        const data = await res.json();
        setProductData(data);
      } catch (error) {
        console.log("Error in Fetching Data");
      }
    }
    getProducts();
  }, []);

  const sortByPrice = (order) => {
    const sortedProducts = [...productData].sort((a, b) => {
      return order === 'asc' ? a.price - b.price : b.price - a.price;
    });
    setProductData(sortedProducts);
    setSortOrder(order);
  };

  const filterByCategory = (category) => {
    setCategory(category);
  };

  const filteredProducts = productData.filter(product =>
    category ? product.category === category : true
  );
  const handleBuy=()=>{
    setBuyText("Order Placed Successfully")
    setTimeout(()=>{
     setBuyText("")
    },800)
 }


  return (
    <div className={style.product_container}>
      <div className={style.cart_wishlist}>
        <div className={style.backTohome}>
          <Link to="/" >
            <IoReturnUpBack className={style.icon} />
            <span>Homepage</span>
          </Link>
        </div>
        <div className={style.wishlist}>
          <Link to="/wishlist">
            <FaHeartCirclePlus className={style.wishlisticon} />
            <span>Wishlist ({wishlist.length})</span>
          </Link>
        </div>
        <div className={style.cart_navbar}>
          <Link to="/cart" className={style.cart_link} onClick={navigateToCart}>
            <FaShoppingCart className={style.icon} />
            <span>Cart ({getTotalItems()})</span>
          </Link>
        </div>
      </div>
      <p style={ItemAddStyle}>{addToCartText}</p>
      <p style={ItemAddStyle}>{addToWishlistText}</p>
      <p style={ItemAddStyle}>{buyText}</p>
      <div className={style.main_container}>
        <div className={style.sidebar}>
          <Sorting
            sortByPrice={sortByPrice}
            filterByCategory={filterByCategory}
            categories={[...new Set(productData.map(product => product.category))]}
          />
        </div>
        <div className={style.product_grid}>
          {filteredProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
              addToWishlist={addToWishlist}
              handleBuy={handleBuy}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;

// Product.js
import React, { useEffect, useState, useContext } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ProductCard from '../../components/ProductCard/ProductCard';
import Sorting from '../../components/Sorting/Sorting';
import style from "./Product.module.css";
import { CartContext } from '../../Context/CartProvider'

const Product = () => {
  const [productData, setProductData] = useState([]);
  const [sortOrder, setSortOrder] = useState('');
  const [category, setCategory] = useState('');
  const { addToCart, navigateToCart, cart } = useContext(CartContext);

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

  return (
    <div className={style.product_container}>
      <div className={style.cart_navbar}>
        <Link to="/cart" className={style.cart_link} onClick={navigateToCart}>
          <FaShoppingCart className={style.cart_icon} />
          <span>Cart ({cart.length})</span>
        </Link>
      </div>
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
            <ProductCard key={product.id} product={product} addToCart={addToCart} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;

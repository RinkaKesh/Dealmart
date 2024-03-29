import React, { useEffect, useState } from 'react'
import ProductCard from '../../components/ProductCard/ProductCard'
import style from "./Product.module.css"

const Product = () => {
  const [productData, setProductData] = useState([])
  async function getProducts() {
    try {
      const res = await fetch("https://fakestoreapi.com/products/")
      const data = await res.json()
      console.log(data);
      setProductData(data)


    } catch (error) {
      console.log("Error in Fetching Data")
    }
  }
  if (!productData) {
    return <div className={style.loading}>Loading...</div>;
  }
  useEffect(() => {
    getProducts()
  }, [])

  return (
    <div className={style.product_container}>
      <div  className={style.sorting_container}>sorting</div>
      <div className={style.productcard_container}>
        {productData?.map((product) => (
          <ProductCard key={product.id} product={product} />

        ))}
      </div>
    </div>
  )
}

export default Product
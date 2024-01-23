import React, { useState, useEffect } from 'react';
import ProductList from './ProductList';
import axios from 'axios';

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products').then((response) => {
          setProducts(response.data);
        });
      }, []);
  return (
    <div>
      <h2>Welcome to the Shopping App</h2>
      <ProductList products={products} />
    </div>
  )
}

export default Shop
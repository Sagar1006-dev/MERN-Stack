// ProductList.js
import React from 'react';
import ProductPreview from './ProductPreview';

const ProductList = ({ products }) => {
  return (
    <div>
      <h3>Product List</h3>
      {products.map((product) => (
        <ProductPreview key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;

// ProductPreview.js
import React from 'react';

const ProductPreview = ({ product }) => {
  return (
    <div>
      <h4>{product.title}</h4>
      <p>{product.price}</p>
      {/* Add more details */}
    </div>
  );
};

export default ProductPreview;

import React from 'react';
import "./ProductDetails.css";

export default function ProductDetails({ product }) {

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div className="product_details">
      <h2>Product #{product.id}</h2>
      <p>Name: {product.name}</p>
      <img src={product.image} alt={product.name} />
      <p>Description: {product.description}</p>
      <p>Price: {product.price}</p>
      <div className="product-stars">
        <img src="/Stars.png" alt="stars" />
    </div>
    </div>
  );
}

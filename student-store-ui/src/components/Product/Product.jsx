import React from "react";
import "./Product.css";

export default function Product({ product }) {
  return (
    <div className="product">
      <h2 className="product-name">{product.name}</h2>
      <p className="product-price">${product.price.toFixed(2)}</p>
      <img src={product.image} alt={product.name} className="product-image" />
      {/* Additional product details */}
    </div>
  );
}

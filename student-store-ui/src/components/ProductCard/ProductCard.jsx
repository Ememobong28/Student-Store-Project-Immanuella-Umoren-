import React from 'react';
import './ProductCard.css';
import { HiOutlineMinus, HiOutlinePlus } from "react-icons/hi";
import { Link } from 'react-router-dom';


export default function ProductCard({ product  , removeFromCart, addToCart}) {
   
  return (
    <div className="product-card">
      <Link to={`product/${product.id}`}>
      <img src={product.image} alt={product.name} />
      </Link>
      <div className="quantity-controls">
      <p>{product.name}</p>
        <HiOutlineMinus className="sign minus" onClick={() => removeFromCart(product.id)} />
        <span className="quantity">0</span>
        <HiOutlinePlus className="sign plus" onClick={() => addToCart(product)} />
      </div>
      <p className="product-price">${product.price.toFixed(2)}</p>
      <div className="stars">
        <img src="/Stars.png" alt="stars" />
      </div>
      
    </div>
  );
}

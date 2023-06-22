import React from 'react';
import './ProductCard.css';
import { HiOutlineMinus, HiOutlinePlus } from "react-icons/hi";
// import { ProductContext } from "../../state/ProductContext";


export default function ProductCard({ product }) {
    // const { addToCart, removeFromCart } = useContext(ProductContext)
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      
      
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

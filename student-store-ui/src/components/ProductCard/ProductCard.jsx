import React from 'react';
import './ProductCard.css';
import { HiOutlineMinus, HiOutlinePlus } from "react-icons/hi";
import { Link } from 'react-router-dom';
import { useState} from 'react';


export default function ProductCard({ product  , removeFromCart, addToCart}) {
  const [quantity, setQuantity] = useState(0);

  const handleRemoveFromCart = () => {
    removeFromCart(product.id, quantity);
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <div className="product-card">
      <Link to={`product/${product.id}`}>
      <img src={product.image} alt={product.name} />
      </Link>
      <div className="quantity-controls">
        <p>{product.name}</p>
        <HiOutlineMinus
          className="sign minus"
          onClick={() => {
            if (quantity > 0) {
              setQuantity(quantity - 1);
              handleRemoveFromCart();
            }
          }}
        />
        <span className="quantity">{quantity}</span>
        <HiOutlinePlus
          className="sign plus"
          onClick={() => {
            setQuantity(quantity + 1);
            handleAddToCart();
          }}
        />
      </div>
      
    </div>
  );
}

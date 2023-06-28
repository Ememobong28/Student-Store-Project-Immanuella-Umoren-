import React, { useContext } from 'react';
import './ProductCard.css';
import { HiOutlineMinus, HiOutlinePlus } from "react-icons/hi";
import { Link } from 'react-router-dom';
import { useState} from 'react';
import { ProductContext } from '../../state/ProductContext';


export default function ProductCard({ product }) {


  const { addToCart, removeFromCart } = useContext(ProductContext)

  

  return (
    <div key={product.id} className="product-card">
      <Link to={`product/${product.id}`} style={{ textDecoration: "none", color: "inherit" }}>
      <img src={product.image} alt={product.name} />
      </Link>
      <div className="quantity-controls">
        <p>{product.name}</p>
        <div>
          <HiOutlinePlus className="sign plus" onClick={(event) => { event.preventDefault(); addToCart(product); }}/>
              <div>
                <HiOutlineMinus className="sign minus" onClick={(event) => { event.preventDefault(); removeFromCart(product.id); }} />
              </div>
        </div>
      </div>
      <p className='product-price'>{formatPrice(product.price)}</p>
      <div className="product-stars">
        <img src="/Stars.png" alt="stars" />
    </div>
    </div>
  );
}

export function formatPrice(price) {
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price);

  return formattedPrice;
}
import React from 'react';
import { useParams } from 'react-router-dom';

export default function ProductDetails({ products }) {
  const { id } = useParams(); 

  const product = products.find((product) => product.id === parseInt(id));
//   console.log("id:",typeof products[0].id)

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div className="product_details">
      <h2>Product #{product.id}</h2>
      <p>Name: {product.name}</p>
      <img src={product.image} alt={product.name} />
      <p>Description: {product.description}</p>
      <div className="product-stars">
        <img src="/Stars.png" alt="stars" />
    </div>
    </div>
  );
}

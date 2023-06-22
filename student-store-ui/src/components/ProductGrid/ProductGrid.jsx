// import React from 'react';
// import ProductCard from '../ProductCard/ProductCard';
// import './ProductGrid.css';

// export default function ProductGrid({ products }) {
//     console.log(products);
//   return (
//     <div className="product-grid">
//         <h3 className="product-heading">Best Selling Products</h3>
//         <div className="grid-container">
//         {products.map((product) => (
//         <ProductCard key={product.id} product={product} />
//       ))}
//         </div>
        
      
//     </div>
//   );
// }

import React from 'react';
import { AiOutlineLoading } from "react-icons/ai";
import "./ProductGrid.css";
import ProductCard from '../ProductCard/ProductCard';

const ProductGrid = ({ products }) => {
  return (
    <>
      <h3 className="product-heading">Best Selling Products</h3>
      <div className="product-grid">
        {products.length > 0 ? (
          products.map((product, i) => (
            <ProductCard product={product} key={i} />
          ))
        ) : (
          <div className="loading-spinner">
            <AiOutlineLoading className="spinner" />
          </div>
        )}
      </div>
    </>
  );
};

export default ProductGrid;


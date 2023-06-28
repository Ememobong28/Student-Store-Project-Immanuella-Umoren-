import React from 'react';
import './ProductGrid.css';
import ProductCard from '../ProductCard/ProductCard';

const ProductGrid = ({ products, searchResults, selectedCategory}) => {
  const filteredProducts = searchResults || products;

  const filteredByCategory =
    selectedCategory && selectedCategory !== 'All categories'
      ? filteredProducts.filter((product) => product.category === selectedCategory.toLowerCase()
      )
      : filteredProducts;

  return (
    <div>
       <h3 className="product-heading">Best Selling Products</h3>
      <div className="product-grid">
      {filteredByCategory && filteredByCategory.length > 0 ? (
        filteredByCategory.map((product) => (
          <ProductCard 
          key={product.id} 
          product={product}
          showDescription={false}
          // handleAddItemToCart={handleAddItemToCart}
          // handleRemoveItemFromCart={handleRemoveItemFromCart}
           />
        ))
      ) : (
        <div className="no-products-message">No products available.</div>
      )}
    </div>
  </div>
    
  );
};

export default ProductGrid;

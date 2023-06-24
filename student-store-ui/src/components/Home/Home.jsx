import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../Hero/Hero";
import "./Home.css";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import ProductGrid from "../ProductGrid/ProductGrid";
import SearchBar from "../Search/Search";
import SubNavbar from "../SubNavbar/SubNavbar";
import { useParams } from 'react-router-dom';
import ProductDetails from "../ProductDetails/ProductDetails";

export default function Home({ products }) {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchResults, setSearchResults] = useState(null);
  const location = useLocation();

  const handleSearch = (searchQuery) => {
    const results = products.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(results);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSearchResults(null);
  };

  const selectedProductId = useParams().id;
  console.log("selectedProductId",selectedProductId)
  const selectedProduct = products.find((product) => product.id === parseInt(selectedProductId));


  return (
    <div className="home">
		<>
          <Hero />
          <SearchBar handleSearch={handleSearch} />
          <SubNavbar handleCategoryClick={handleCategoryClick} />
        </>
	  {!selectedProduct ? (
		<>
		<ProductGrid
        products={products}
        searchResults={searchResults}
        selectedCategory={selectedCategory}
      />
      <About />
      <Contact />
      <Footer />
	  </>
      ) : 
	   <ProductDetails product={selectedProduct} />
	  }
      
    </div>
  );
}

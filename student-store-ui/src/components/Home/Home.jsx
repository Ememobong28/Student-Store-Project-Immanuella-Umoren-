import React, { useState } from "react";
import Hero from "../Hero/Hero";
import "./Home.css";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import ProductGrid from "../ProductGrid/ProductGrid";
import SearchBar from "../Search/Search";
import SubNavbar from "../SubNavbar/SubNavbar";

export default function Home({ products }) {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchResults, setSearchResults] = useState(null);

  const handleSearch = (searchQuery) => {
    // Filter products based on the search query
    const results = products.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <div className="home">
      <Hero />
      <SearchBar handleSearch={handleSearch} />
      <SubNavbar setSelectedCategory={setSelectedCategory} />
      <ProductGrid
        products={products}
        searchResults={searchResults}
        selectedCategory={selectedCategory}
      />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

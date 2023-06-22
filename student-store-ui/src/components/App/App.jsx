import * as React from "react"
import { BrowserRouter } from 'react-router-dom'
import Navbar from "../Navbar/Navbar"
// import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
// import Hero from "../Hero/Hero"
import "./App.css"
// import Search from "../Search/Search"
import { useState, useEffect } from "react";
import ProductGrid from '../ProductGrid/ProductGrid';

export default function App() {
  const [products, setProducts] = useState([ ]);

  useEffect(() => {
    // Function to fetch products from the API
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://codepath-store-api.herokuapp.com/store"); // Replace with your API endpoint
        const data = await response.json();
        setProducts(data.products);
        console.log(data.products)
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);


  return (
    <div className="app">
      <BrowserRouter>
        <main>
          <Navbar />
          <Home products={products}/>
          {/* <Hero />
          <Search products={products} />
           
          */}
          {/* <ProductGrid products={products} /> */}
        </main>
      </BrowserRouter>
    </div>
  );
}

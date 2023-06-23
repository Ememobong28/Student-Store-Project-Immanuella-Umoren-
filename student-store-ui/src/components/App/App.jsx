import React, { useState, useEffect } from "react";
import { BrowserRouter } from 'react-router-dom';
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import "./App.css";

export default function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://codepath-store-api.herokuapp.com/store");
        const data = await response.json();
        setProducts(data.products);
        console.log(data.products);
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
          <Home products={products} />
        </main>
      </BrowserRouter>
    </div>
  );
}

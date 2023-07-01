import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import "./App.css";
import Sidebar from "../Sidebar/Sidebar";
import { ProductContext } from "../../state/ProductContext";

export default function App() {
  const { setFilteredProducts, setProducts, products } = useContext(ProductContext)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://codepath-store-api.herokuapp.com/store");
        const data = await response.json();
        setFilteredProducts(data.products)
        setProducts(data.products);
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
          <Sidebar />
          <div className="body">
            <Routes>
              <Route path="/" element={<Home products={products} />} />
              <Route path="/product/:id" element={<Home products={products} />} />
            </Routes>
          </div>
        </main>
      </BrowserRouter>
    </div>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import './SubNavbar.css';

const SubNavbar = ({ setSelectedCategory}) => {
  const handleCategoryClick = category => {
    setSelectedCategory(category)
  }

    return (
      <nav className="sub-navbar">
        <div className="sub-navbar-menu">
          <div className="sub-navbar-hamburger">
            {/* Hamburger Icon */}
          </div>
          <nav>
        <ul>
          <li>
            <button onClick={() => handleCategoryClick("Clothing")}>Clothing</button>
          </li>
          <li>
            <button onClick={() => handleCategoryClick("Food")}>Food</button>
          </li>
          <li>
            <button onClick={() => handleCategoryClick("Accessories")}>Accessories</button>
          </li>
          <li>
            <button onClick={() => handleCategoryClick("Tech")}>Tech</button>
          </li>
          <li>
            <button onClick={() => handleCategoryClick("All categories")}>All categories</button>
          </li>
        </ul>
      </nav>
        </div>
      </nav>
    );
 }

 export default SubNavbar;
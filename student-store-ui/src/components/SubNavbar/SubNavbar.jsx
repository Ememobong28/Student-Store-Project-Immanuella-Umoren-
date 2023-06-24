import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SubNavbar.css';

const SubNavbar = ({ handleCategoryClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`sub-navbar ${isOpen ? 'open' : ''}`}>
      <div className="sub-navbar-menu">
        <div className="sub-navbar-hamburger" onClick={toggleMenu}>
          <div className={`hamburger ${isOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <nav className={`sub-navbar-links ${isOpen ? 'open' : ''}`}>
          <ul className='categories'>
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
};

export default SubNavbar;

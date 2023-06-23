import React, { useState } from "react";
import "./Search.css";

const SearchBar = ({ handleSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch(searchQuery);
  };

  return (
    <div className="search">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for products 😀"
          value={searchQuery}
          onChange={handleChange}
        />
        <button className="searchBtn" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;

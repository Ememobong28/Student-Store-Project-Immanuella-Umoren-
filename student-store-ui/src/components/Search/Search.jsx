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

  const handleClear = () => {
    setSearchQuery("");
    handleSearch(""); // Reset the search results
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSubmit(event);
    }
  };

  return (
    <div className="search">
      <form onSubmit={handleSubmit}>
        <div className="searchInput">
          <input
            type="text"
            placeholder="Search for products 😀"
            value={searchQuery}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
          />
          {searchQuery && (
            <button className="clearBtn" onClick={handleClear}>
              X
            </button>
          )}
          <button className="searchBtn" type="submit">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;

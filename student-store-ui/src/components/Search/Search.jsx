import React, { useState } from "react";
import "./Search.css"

export default function Search() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Perform search or any other desired action with the searchQuery
    console.log("Search query:", searchQuery);
    // Reset the search query
    setSearchQuery("");
  };

  return (
    <div className="search">
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

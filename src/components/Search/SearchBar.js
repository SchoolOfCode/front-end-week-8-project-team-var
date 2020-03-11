import React from "react";

function SearchBar({ handleChange }) {
  return (
    <div>
      <input
        type="text"
        className="search-box"
        placeholder="Search for a contract"
        onChange={handleChange}
      ></input>
      <button>Search</button>
    </div>
  );
}

export default SearchBar;

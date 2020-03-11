import React from "react";

function SearchBar({ handleChange }) {
  function onChange(event) {
    handleChange(event.target.value);
  }

  return (
    <div>
      <input
        type="text"
        className="search-box"
        placeholder="Search for a contract"
        onChange={onChange}
      ></input>
      <button>Search</button>
    </div>
  );
}

export default SearchBar;

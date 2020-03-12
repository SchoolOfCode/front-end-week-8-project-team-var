import React from "react";
import "./searchbar.css";

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
    </div>
  );
}

export default SearchBar;

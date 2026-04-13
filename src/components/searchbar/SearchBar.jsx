import React from "react";
import "./SearchBar.css";

const SearchBar = (props) => {
  return (
    <div className="searchbar">
      <form>
        <input
          type="text"
          placeholder="Find a recipe..."
          className="form-control"
        />
        <input type="submit" className="btn" value="Search" />
      </form>
    </div>
  );
};

export default SearchBar;

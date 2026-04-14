import React from "react";
import "./SearchBar.css";

const SearchBar = ({ value, isLoading, handleSubmit, onChange }) => {
  return (
    <div className="searchbar">
      <form>
        <input
          type="text"
          value={value}
          disabled={isLoading}
          placeholder="Find a recipe..."          
          onChange={onChange}
        />
        <input
          type="submit"
          
          value="Search"
          disabled={isLoading || !value}
        />{" "}
        {/* //disabled button if it is Loading or input is empty */}
      </form>
    </div>
  );
};

export default SearchBar;

import React, { useState } from "react";
import "./Search.css";

export const Search = (props) => {
  const [search, setSearch] = useState("");

  function updateSearch(event) {
    let searchText = event.target.value.substr(0, 30).toLowerCase();
    setSearch(searchText);
    console.log(searchText);

    props.onSearch(searchText);
  }

  const updateSearchOnSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="search-container">
      <form onSubmit={updateSearchOnSubmit}>
        <input
          id="searchInput"
          className="search-input"
          onChange={updateSearch}
          placeholder="Search"
          value={search}
        />
      </form>
    </div>
  );
};

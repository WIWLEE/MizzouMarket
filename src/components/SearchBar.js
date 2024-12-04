import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSearchChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    onSearch(query);  
  };

  return (
    <div id="search-bar">
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Search items..."
          value={query}
          onChange={handleSearchChange}
        />
        <button type="submit" onClick={handleSearchSubmit}>Search</button>
      </form>
    </div>
  );
}

export default SearchBar;

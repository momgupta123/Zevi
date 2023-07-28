import React, { useState } from 'react';
import {ImSearch }from 'react-icons/im';
const SearchBar = ({ onSearch, onSearchAll }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      onSearch(searchTerm);
    }
  };

  const handleSearchAll = () => {
    onSearchAll();
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        placeholder="Search for trends..."
      />
      <ImSearch onClick={handleSearchAll}  className='search'/>
    </div>
  );
};

export default SearchBar;

import React from 'react';

const SearchBar = () => {
  return (
    <div className='search-bar' style={{display: 'flex'}}>
      <input type='search' placeholder='Search a video' size='40' style={{marginLeft: '5em'}}/>
      <button type='button'>Search</button>
    </div>
);
};

export default SearchBar;

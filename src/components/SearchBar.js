/* eslint-disable react/prop-types */
import React from "react";
import { BiSearchAlt } from "react-icons/bi";

const SearchBar = ({ handleFilter, filteredList, handleSearch, placeholder }) => {


  return (
    <div className="search-bar">
      <div className="search-bar__input">
        <input
          type="text"
          className="search-bar__input-field"
          placeholder={placeholder}
          aria-label="Search a video"
          onChange={handleFilter}
        />
        <button className="search-button" type="button">
          <BiSearchAlt />
        </button>
      </div>
      {filteredList.length !== 0 && (
        <div className="drop-down__list">
          {filteredList.slice(0, 5).map((video) => (
            <button key={video?.id?.videoId} className="drop-down__btn-video" onClick={() => handleSearch(video.id.videoId)}>
              {video?.id?.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;

/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";

const SearchBar = ({ videoIds }) => {
  const [filteredList, setFilteredList] = useState([]);

  const handleFilter = (e) => {
    const searchWord = e.target.value;
    const newFilter = videoIds.filter((video) => {
      return video.id.name.toLowerCase().includes(searchWord.toLowerCase());
    });

    searchWord === "" ? setFilteredList([]) : setFilteredList(newFilter);
  };

  return (
    <div className="search-bar">
      <div className="search-bar__input">
        <input
          type="type"
          className="search-bar__input-field"
          placeholder="Search a video"
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
            <button key={video.id.videoId} className="drop-down__btn-video">
              {video.id.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;

/* eslint-disable react/prop-types */
import React from "react";
// import DropDown from "./DropDown";
import { BiSearchAlt } from "react-icons/bi";

const SearchBar = ({ videoIds }) => {

  const options = videoIds.map((video) => {
    const container = {};

    container.name = video.id.name;
    container.id = video.id.videoId;

    return container;
  });

  return (
    <div className="search-bar">
      <div className="search-bar__input">
        <input
          type = "search"
          name = "q"
          className="search-bar__input-field"
          placeholder="Search a video"
          aria-label="Search a video"
        />
        <button className="search-button" type="button">
          <BiSearchAlt />
        </button>
      </div>      
      <div className="drop-down__list">
      {options.map((option) => 
        <button key={option.id} className="drop-down__btn-video">
          {option.name}
        </button>
      )}
    </div>
    </div>
  );
};

export default SearchBar;

/* eslint-disable react/prop-types */
import React from "react";
import DropDown from "./DropDown";

const SearchBar = ({ videoIds }) => {

  const options = videoIds.map((video) => {
    const container = {};

    container.name = video.id.name;
    container.id = video.id.videoId;

    return container;
  });

  return (
    <div className="search-bar">
      <div className="search-bar__drop-down">
        <input
          options={options}
          className="search-bar__input"
          placeholder="Search a video"
          // onChange={() => handleSearch())}
        />
        <DropDown options={options} />
      </div>
      <button className="search-button" type="button">
        Search
      </button>
      
    </div>
  );
};

export default SearchBar;

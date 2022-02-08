/* eslint-disable react/prop-types */
import React, { useState } from "react";
import DropDown from "./DropDown";

const SearchBar = ({ videoIds }) => {

  const [focus, setFocus] = useState(false);
  const handleDropMenuOn = (e) => {e.target === "input.search-bar__input" ? setFocus(true) : setFocus(false)};
  // {e.target === input.search-bar__input ? setFocus(true) : setFocus(false)}
  // const handleDropMenuOff = () => setFocus(false);

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
          onClick={(e) => handleDropMenuOn(e)}
          // onUnfocus={handleDropMenuOff}
        />
        {focus ? <DropDown options={options} /> : null}
      </div>
      <button className="search-button" type="button">
        Search
      </button>
      
    </div>
  );
};

export default SearchBar;

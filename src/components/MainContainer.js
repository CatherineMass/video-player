/* eslint-disable react/prop-types */
import React, { useState } from "react";
import SearchBar from "./SearchBar";
import Video from "./Video";
import BtnGroup from "./BtnGroup";
import logo from "../logo.svg";

const MainContainer = ({ defaultVideo, videoIds, handleFilter, filteredList }) => {
  let [currentIndex, setCurrentIndex] = useState(0);
  let currentVideo = videoIds[currentIndex];

  // Next Button
  const nextClick = () => {
    currentIndex < videoIds.length - 1
      ? setCurrentIndex(currentIndex + 1)
      : alert("This is the end of the playlist!");
  };

  // Previous Button
  const prevClick = () => {
    currentIndex > 0
      ? setCurrentIndex(currentIndex - 1)
      : alert("No more videos! Try clicking Next instead.");
  };

  // Search Bar
  const handleSearch = () => {

  };

  return (
    <div className="main-container">
      <img src={logo} alt="logo" className="logo" />
      <SearchBar videoIds={videoIds} handleSearch={handleSearch} handleFilter={handleFilter} filteredList={filteredList} />
      <div className="video-and-btn-container">
        <Video currentVideo={currentVideo} defaultVideo={defaultVideo} />
        <BtnGroup onNextClick={nextClick} onPrevClick={prevClick} />
      </div>
    </div>
  );
};

export default MainContainer;

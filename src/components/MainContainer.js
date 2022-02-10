/* eslint-disable react/prop-types */
import React from "react";
import SearchBar from "./SearchBar";
import Video from "./Video";
import BtnGroup from "./BtnGroup";
import logo from "../logo.svg";

const MainContainer = ({ defaultVideo, handleFilter, filteredList, handleSearch, placeholder, currentVideo, nextClick, prevClick }) => {


  return (
    <div className="main-container">
      <img src={logo} alt="logo" className="logo" />
      <SearchBar handleFilter={handleFilter} filteredList={filteredList} handleSearch={handleSearch} placeholder={placeholder} />
      <div className="video-and-btn-container">
        <Video currentVideo={currentVideo} defaultVideo={defaultVideo} />
        <BtnGroup onNextClick={nextClick} onPrevClick={prevClick} />
      </div>
    </div>
  );
};

export default MainContainer;

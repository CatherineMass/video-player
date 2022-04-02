import React, { useState } from 'react';
import SearchBar from './SearchBar';
import Video from './Video';
import BtnGroup from './BtnGroup';
import logo from '../logo.svg';
import { AppProps } from '../AppProps';

interface Props {
  q: string;
  handleModalOn: AppProps['noParamVoid'];
	currentVideo: AppProps['video'];
	filteredList: AppProps['arrayOfVideos'];
	handleFilter: AppProps['handleFilter'];
	handleSearch: AppProps['handleSearch'];
	nextClick: AppProps['noParamVoid'];
	prevClick: AppProps['noParamVoid'];
	sendVideoToSidebar: AppProps['sendVideoToSidebar'];
}

const MainContainer: React.FC<Props> = ({
  q, handleModalOn, handleFilter,	filteredList,	handleSearch, currentVideo, nextClick,	prevClick, sendVideoToSidebar,
}) => {


  return (
    <div className="main-container">
      <img src={logo} alt="logo" className="logo" />
      <SearchBar
        handleFilter={handleFilter}
        filteredList={filteredList}
        handleSearch={handleSearch}
      />
      <div className="video-and-btn-container">
        {q.toLowerCase() === 'covid' && <p className='warning'><span>&#9888;</span> If you wish to get the vaccin you can book a time <button className='btn-open-modal' onClick={handleModalOn}>here</button>.</p>}
        <Video
          currentVideo={currentVideo}
          sendVideoToSidebar={sendVideoToSidebar}
        />
        <BtnGroup onNextClick={nextClick} onPrevClick={prevClick} />
      </div>
    </div>
  );
};

export default MainContainer;

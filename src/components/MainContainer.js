import React, { useState } from 'react';
import SearchBar from './SearchBar';
import Video from './Video';
import BtnGroup from './BtnGroup';
import logo from '../logo.svg';


const MainContainer = ({ defaultVideo, videoIds }) => {
  let [currentIndex, setCurrentIndex] = useState(0);

  // Next Button
  const nextClick = () => {setCurrentIndex(currentIndex + 1)}


  // Previous Button
  const prevClick = () => {setCurrentIndex(currentIndex - 1)}
  console.log(currentIndex);
  let currentVideo = videoIds[currentIndex];

  return (
    <div className='main-container'>
      <img src={logo} alt='logo' className='logo'/>
      <SearchBar />
      <div className='video-and-btn-container'>
        <Video currentVideo={currentVideo} />
        <BtnGroup onNextClick={nextClick} onPrevClick={prevClick} />
      </div>
    </div>
  );
};

export default MainContainer;

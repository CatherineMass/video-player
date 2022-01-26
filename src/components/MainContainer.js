import React, { useState } from 'react';
import SearchBar from './SearchBar';
import Video from './Video';
import BtnGroup from './BtnGroup';
import logo from '../logo.svg';


const MainContainer = ({ defaultVideo, videoIds }) => {
  let [currentIndex, setCurrentIndex] = useState(0);

  
  // for (let i=1; i<=3;i++) {
  //   currentIndex = currentIndex + 1;
  //   setCurrentIndex(currentIndex);
  //   console.log(currentIndex); 
  // }
  let currentVideo = videoIds[currentIndex];

  // Next Button
  const nextClick = () => {setCurrentIndex(currentIndex + 1)}
    console.log(currentIndex);

    // ==> setCurrentIndex is not a function...
  //   console.log(currentVideo);


  return (
    <div className='main-container'>
      <img src={logo} alt='logo' className='logo'/>
      <SearchBar />
      <div className='video-and-btn-container'>
        <Video currentVideo={currentVideo} />
        <BtnGroup onNextClick={nextClick} />
      </div>
    </div>
  );
};

export default MainContainer;

import React from 'react';
import SearchBar from './SearchBar';
import Video from './Video';
import BtnGroup from './BtnGroup';
import logo from '../logo.svg';


const MainContainer = ({ defaultVideo }) => {
  console.log(logo);
  return (
    <div className='main-container' style={{width: '80vw', height: '80vh', border: '2px solid black', paddingTop: '5em'}}>
      <img src={logo} alt='logo'style={{position: 'absolute', top: '0', left: '100vh', width: '60px', height: '59px'}}/>
      <SearchBar />
      <div className='video-and-btn-container' style={{marginTop: '2em', display: 'flex', flexDirection: 'column', alignItems:'center'}}>
        <Video video={defaultVideo} />
        <BtnGroup />
      </div>
    </div>
  );
};

export default MainContainer;

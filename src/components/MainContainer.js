import React from 'react';
import Video from './Video';


const MainContainer = ({ defaultVideo }) => {
  return (
    <div className='main-container' style={{width: '55em', height: '90vh', border: '2px solid black'}}>
      <Video video={defaultVideo} />
    </div>
  );
};

export default MainContainer;

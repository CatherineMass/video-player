/* eslint-disable react/prop-types */
import React from 'react';

const BtnAllVideos = ({ onClickAllVideos }) => {
  return (
    <button 
    className="btn-all-videos" 
    type="button" 
    style={{width: '7rem', height: '2em', backgroundColor: 'white', textAlign: 'center'}}
    onClick={onClickAllVideos}
  >
    All Videos
  </button>
  );
};

export default BtnAllVideos;

/* eslint-disable react/prop-types */
import React from 'react';
import BtnVideoName from './BtnVideoName';
import { FaHeart } from 'react-icons/fa';


const VideoTag = ({ videoName, videoId, favoritesVideos, clickHeart }) => {


  return (
    <div>
    <BtnVideoName videoName={videoName} videoId={videoId} />
    <button 
      className='btn-heart'
      type='button' 
      alt='heart-favorite' 
      id= {videoId}
      onClick={() => clickHeart(videoId)}
    >
      {favoritesVideos.includes(videoId) ? <FaHeart color='red'/> : <FaHeart color='grey'/>}
    </button>
  </div>
  );
};

export default VideoTag;

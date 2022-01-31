/* eslint-disable react/prop-types */
import React from 'react';
import VideoTag from './VideoTag';

const ListAllVideos = ({ videoIds, clickedVideos, clickHeart }) => {
  

  return (
    <div className='list-all-videos'>
    { videoIds.map(video => 
      <VideoTag 
        videoName={video?.id?.name} 
        videoId={video?.id?.videoId} 
        key={video?.id?.videoId}
        clickHeart={clickHeart} 
        clickedVideos={clickedVideos}
      />) }
  </div>
  );
};

export default ListAllVideos;

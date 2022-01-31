/* eslint-disable react/prop-types */
import React from 'react';
import VideoTag from './VideoTag';

const ListDefault = ({ defaultVideo, clickedVideos, clickHeart }) => {
  return (
    <div className='list-default'>
    <VideoTag 
      videoName={defaultVideo?.id?.name} 
      videoId={defaultVideo?.id?.videoId} 
      key={defaultVideo?.id?.videoId} 
      clickedVideos={clickedVideos}
      clickHeart={clickHeart}
    />
  </div>
  );
};

export default ListDefault;

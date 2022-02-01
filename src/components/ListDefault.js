/* eslint-disable react/prop-types */
import React from 'react';
import VideoTag from './VideoTag';

const ListDefault = ({ defaultVideo, favoritesVideos, clickHeart }) => {
  return (
    <div className='list-default'>
    <VideoTag 
      videoName={defaultVideo?.id?.name} 
      videoId={defaultVideo?.id?.videoId} 
      key={defaultVideo?.id?.videoId} 
      favoritesVideos={favoritesVideos}
      clickHeart={clickHeart}
    />
  </div>
  );
};

export default ListDefault;

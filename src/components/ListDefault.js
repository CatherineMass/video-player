/* eslint-disable react/prop-types */
import React from 'react';
import VideoTag from './VideoTag';

const ListDefault = ({ defaultVideo, clickedVideos, setClickedVideos }) => {
  return (
    <div className='list-default'>
    <VideoTag 
      videoName={defaultVideo?.id?.name} 
      videoId={defaultVideo?.id?.videoId} 
      key={defaultVideo?.id?.videoId} 
      clickedVideos={clickedVideos}
      setClickedVideos={setClickedVideos}
    />
  </div>
  );
};

export default ListDefault;

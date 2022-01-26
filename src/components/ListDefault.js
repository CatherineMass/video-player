import React from 'react';
import VideoTag from './VideoTag';

const ListDefault = ({ defaultVideo, clickHeart,clickedHeart, setClickedHeart }) => {
  return (
    <div className='list-all-videos'>
    <VideoTag 
      videoName={defaultVideo?.id?.name} 
      videoId={defaultVideo?.id?.videoId} 
      key={defaultVideo?.id?.videoId} 
      clickedHeart={clickedHeart}
      setClickedHeart={setClickedHeart}
    />
  </div>
  );
};

export default ListDefault;

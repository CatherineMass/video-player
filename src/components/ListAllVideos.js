import React from 'react';
import VideoTag from './VideoTag';

const ListAllVideos = ({ videoIds, clickedHeart, clickHeart, setClickedHeart }) => {
  

  return (
    <div className='list-all-videos'>
    { videoIds.map(video => 
      <VideoTag 
        videoName={video?.id?.name} 
        videoId={video?.id?.videoId} 
        key={video?.id?.videoId}
        clickHeart={clickHeart} 
        clickedHeart={clickedHeart}
        setClickedHeart={setClickedHeart}
      />) }
  </div>
  );
};

export default ListAllVideos;

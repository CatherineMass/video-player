import React from 'react';
import VideoTag from './VideoTag';

const ListAllVideos = ({ videoIds, clickHeart,clickedHeart, setClickedHeart }) => {

  return (
    <div className='list-all-videos'>
    { videoIds.map(video => 
      <VideoTag 
        videoName={video?.id?.name} 
        videoId={video?.id?.videoId} 
        key={video?.id?.videoId} 
        clickedHeart={clickedHeart}
        setClickedHeart={setClickedHeart}
      />) }
  </div>
  );
};

export default ListAllVideos;

import React from 'react';
import VideoTag from './VideoTag';

const ListAllVideos = ({ videoIds, clickHeart,clickedHeart, setClickedHeart }) => {
  // console.log(arrayOfVideos);
  // const videoName = defaultVideo?.id?.name;
  // const videoId = defaultVideo?.id?.videoId;

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

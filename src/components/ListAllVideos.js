import React from 'react';
import VideoTag from './VideoTag';

const ListAllVideos = ({ arrayOfVideos, clickHeart,clickedHeart, setClickedHeart }) => {
  // console.log(arrayOfVideos);
  // const videoName = defaultVideo?.id?.name;
  // const videoId = defaultVideo?.id?.videoId;

  return (
    <div className='list-all-videos'>
    { arrayOfVideos.map(video => 
      <VideoTag 
        videoName={video?.id?.name} 
        videoId={video?.id?.videoId} 
        key={video?.id?.videoId} 
        clickedHeart={clickedHeart}
        setClickedHeart={setClickedHeart}
      />) }
      <VideoTag 
        videoName={arrayOfVideos[1]?.id?.name} 
        videoId={arrayOfVideos[1]?.id?.videoId} 
        key={arrayOfVideos[1]?.id?.videoId} 
        clickedHeart={clickedHeart}
        setClickedHeart={setClickedHeart}
      />
  </div>
  );
};

export default ListAllVideos;

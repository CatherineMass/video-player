import React from 'react';
import VideoTag from './VideoTag';

const ListAllVideos = ({ arrayOfVideos }) => {
  // console.log(arrayOfVideos);
  // const videoName = defaultVideo?.id?.name;
  // const videoId = defaultVideo?.id?.videoId;

  return (
    <div className='list-all-videos'>
    { arrayOfVideos.map(video => <VideoTag videoName={video?.id?.name} videoId={video?.id?.videoId} />) }
  </div>
  );
};

export default ListAllVideos;

import React from 'react';
import ListAllVideos from './ListAllVideos';
import VideoTag from './VideoTag';

const ListOfVideosSidebar = ({ defaultVideo, arrayOfVideos, visibleAll }) => {
  // console.log(arrayOfVideos)
  return (
    <div       
      className='list-of-videos-sidebar' 
      style={{
        display: 'flex',
        flexDirection:'column',
        justifyContent: 'left',
        position: 'relative', 
        width: '20em', 
        height: '70vh', 
        float: 'right', 
        marginTop: '1em', 
        padding: '0 .3em', 
        border: '2px solid black', 
        textAlign: 'left'
      }}
    >
      {visibleAll && <ListAllVideos arrayOfVideos={arrayOfVideos} />}
    </div>
  );
};

export default ListOfVideosSidebar;
// <VideoTag defaultVideo={defaultVideo} />
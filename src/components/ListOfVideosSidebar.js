import React from 'react';
import ListAllVideos from './ListAllVideos';
import ListFavorites from './ListFavorites';
import ListDefault from './ListDefault';

const ListOfVideosSidebar = ({ defaultVideo, videoIds, visibleAll, visibleFav, clickHeart,clickedHeart, setClickedHeart }) => {
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
      {visibleAll ? 
        <ListAllVideos 
          videoIds={videoIds} 
          setClickedHeart={setClickedHeart}
          clickedHeart={clickedHeart} 
        /> : 
        visibleFav ? 
          <ListFavorites 
            setClickedHeart={setClickedHeart}
            clickedHeart={clickedHeart} 
          /> : 
        <ListDefault 
          defaultVideo={defaultVideo} 
          setClickedHeart={setClickedHeart}
          clickedHeart={clickedHeart} 
        />
      }
    </div>
  );
};

export default ListOfVideosSidebar;
// <VideoTag defaultVideo={defaultVideo} />
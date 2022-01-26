import React from 'react';
import ListAllVideos from './ListAllVideos';
import ListFavorites from './ListFavorites';
import ListDefault from './ListDefault';

const ListOfVideosSidebar = ({ defaultVideo, videoIds, visibleAll, visibleFav, clickHeart,clickedHeart, setClickedHeart }) => {
  // console.log(arrayOfVideos)
  return (
    <div className='list-of-videos-sidebar'>
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
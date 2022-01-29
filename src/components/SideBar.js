import React, { useState } from 'react';
import ListOfVideosSidebar from './ListOfVideosSidebar';
import LinksSidebar from './LinksSidebar';


const SideBar = ({ videoIds, defaultVideo }) => {
  // Button All
  const [visibleAll, setVisibleAll] = useState(false);
  const onClickAllVideos = () => { 
    setVisibleAll(!visibleAll);
    setVisibleFav(false);
  }

  // Button Favorites
  const [visibleFav, setVisibleFav] = useState(false);
  const onClickFav = () => { 
    setVisibleFav(!visibleFav);
    setVisibleAll(false); 
  }

  // Click heart
  const [clickedHeart, setClickedHeart] = useState([]);
  // const clickedVideos = [];

  const clickHeart = (id) => {

    clickedHeart.find(video => video?.id?.videoId === id) === undefined ? setClickedHeart(clickedHeart.concat(id)) : setClickedHeart(clickedHeart.filter(video => video?.id?.videoId !== id)); 
    console.log(clickedHeart);
    // console.log(setClickedHeart);
  };
  
    
  return (
    <div className='side-bar-container'>
      <LinksSidebar onClickAllVideos={onClickAllVideos} onClickFav={onClickFav} />
      <ListOfVideosSidebar 
        defaultVideo={defaultVideo} 
        videoIds={videoIds} 
        visibleAll={visibleAll} 
        visibleFav={visibleFav} 
        clickHeart={clickHeart}
        clickedHeart={clickedHeart}
        setClickedHeart={setClickedHeart}
      />
    </div>
  );
};

export default SideBar;

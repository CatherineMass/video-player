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
  const [clickedVideos, setClickedVideos] = useState(["_3ngiSxVCBs", "3zTR4ayDG38"]);

  const clickHeart = (id) => {
    // console.log(id);
    // videoIds.map(video => console.log(video.id.videoId));

    // clickedHeart.map(id => clickedHeart.includes(id) === false ? setClickedHeart(clickedHeart.push(id)) : setClickedHeart(clickedHeart.filter(video => video.id.videoId !== id))); 

    // clickedHeart.map(videoId => videoId.includes(id) ? console.log(clickedHeart.indexOf(videoId)) : clickedHeart.concat(id)); 
    // console.log(clickedHeart);
    // => []

    clickedVideos.forEach(videoId => videoId.includes(id) ? console.log(clickedVideos.indexOf(videoId)) : setClickedVideos(clickedVideos.concat(id))); 
    console.log(clickedVideos);
    // adds even the ones already in it. Plus delay (get the latest clicked only after clicking another time).

    // clickedHeart.indexOf(id) < 0 ? setClickedHeart(clickedHeart.push(id)) : setClickedHeart(clickedHeart.filter(video => video.id.videoId !== id));
    // console.log(clickedHeart); 
    // => also just first time and not second.

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

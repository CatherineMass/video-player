import React from 'react';
import { FaHeart } from 'react-icons/fa';
// import redHeart from '../redHeart.svg';
// import heart from '../heart.svg';

const HeartIcon = ({ setClickedHeart, clickedHeart, videoId }) => {
  const clickHeart = (videoId) => setClickedHeart(!clickedHeart);

  return (
    <button 
      type='button' 
      alt='heart-favorite' 
      style={{paddingTop:'.3em', width: '30px', height: '20px', border:'none', backgroundColor:'white'}}
      onClick={clickHeart}
    >
      {clickedHeart ? <FaHeart color='red'/> : <FaHeart color='grey'/>}
    </button>
  );
};

export default HeartIcon;

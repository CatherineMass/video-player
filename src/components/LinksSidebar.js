import React from 'react';
import BtnAllVideos from './BtnAllVideos';
import BtnFavorites from './BtnFavorites';

const LinksSidebar = () => {
  return (
    <div 
      className='sidebar-links' 
      style={{
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent:'space-evenly', 
        marginTop: '2em'
      }}
    >
    <BtnFavorites />
    <BtnAllVideos />
  </div>
  );
};

export default LinksSidebar;

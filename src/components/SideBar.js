import React from 'react';
import ListOfVideosSidebar from './ListOfVideosSidebar';

const SideBar = ({ videoList, defaultVideo }) => {
  return (
    <div 
      className='side-bar-container' 
      style={{border: '2px solid black', width: '21em', height: '90vh', float: 'right', padding: '0 .3em', marginTop: '-33em', marginRight: '2em'}}
    >
      <ListOfVideosSidebar defaultVideo={defaultVideo} />
    </div>
  );
};

export default SideBar;

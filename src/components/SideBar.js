import React from 'react';
import ListOfVideosSidebar from './ListOfVideosSidebar';
import LinksSidebar from './LinksSidebar';


const SideBar = ({ videoList, defaultVideo }) => {
  return (
    <div 
      className='side-bar-container' 
      style={{border: '2px solid black', width: '20vw', height: '90vh', float: 'right', padding: '0 .3em'}}
    >
      <LinksSidebar />
      <ListOfVideosSidebar defaultVideo={defaultVideo} />
    </div>
  );
};

export default SideBar;

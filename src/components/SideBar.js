import React, { useState } from 'react';
import ListOfVideosSidebar from './ListOfVideosSidebar';
import LinksSidebar from './LinksSidebar';


const SideBar = ({ arrayOfVideos, defaultVideo }) => {
  const [visibleAll, setVisibleAll] = useState(false);

  const onClickAllVideos = () => { setVisibleAll(!visibleAll) }
    
  return (
    <div 
      className='side-bar-container' 
      style={{border: '2px solid black', width: '20vw', height: '90vh', float: 'right', padding: '0 .3em'}}
    >
      <LinksSidebar onClickAllVideos={onClickAllVideos} />
      <ListOfVideosSidebar defaultVideo={defaultVideo} arrayOfVideos={arrayOfVideos} visibleAll={visibleAll} />
    </div>
  );
};

export default SideBar;

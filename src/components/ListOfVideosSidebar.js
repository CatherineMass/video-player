import React from 'react';
import BtnVideoName from './BtnVideoName';
import HeartIcon from './HeartIcon';

const ListOfVideosSidebar = ({ defaultVideo }) => {
  return (
    <div 
      className='list-of-videos-sidebar' 
      style={{
        display: 'flex',
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
      <BtnVideoName defaultVideo={defaultVideo} />
      <HeartIcon />
    </div>
  );
};

export default ListOfVideosSidebar;

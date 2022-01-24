import React from 'react';
import BtnVideoName from './BtnVideoName';

const ListOfVideosSidebar = ({ defaultVideo }) => {
  return (
    <div className='list-of-videos-sidebar' style={{position: 'relative', width: '20em', height: '75vh', float: 'right', marginTop: '5em', padding: '0 .3em', border: '2px solid black', textAlign: 'left'}}>
      <BtnVideoName defaultVideo={defaultVideo} />
    </div>
  );
};

export default ListOfVideosSidebar;

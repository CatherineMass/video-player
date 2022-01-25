import React from 'react';
import PreviousBtn from './PreviousBtn';
import NextBtn from './NextBtn';

const BtnGroup = () => {
  return (
      <div className='btn-group'>
        <PreviousBtn />
        <NextBtn />
      </div>
  );
};

export default BtnGroup;

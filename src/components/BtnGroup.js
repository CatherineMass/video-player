import React from 'react';
import PreviousBtn from './PreviousBtn';
import NextBtn from './NextBtn';

const BtnGroup = ({ onNextClick }) => {
  return (
      <div className='btn-group'>
        <PreviousBtn />
        <NextBtn onNextClick={onNextClick} />
      </div>
  );
};

export default BtnGroup;

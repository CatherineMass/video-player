/* eslint-disable react/prop-types */
import React from 'react';
import PreviousBtn from './PreviousBtn';
import NextBtn from './NextBtn';

const BtnGroup = ({ onNextClick, onPrevClick }) => {
  return (
      <div className='btn-group'>
        <PreviousBtn onPrevClick={onPrevClick} />
        <NextBtn onNextClick={onNextClick} />
      </div>
  );
};

export default BtnGroup;

import React from 'react';

const NextBtn = ({ onNextClick }) => {
  return (
      <button 
        onClick={onNextClick}
        className='next-btn'
      >Next</button>
  );
};

export default NextBtn;

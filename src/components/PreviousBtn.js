import React from 'react';

// Putting it on line didn't work, got error saying return statement is missing.

const PreviousBtn = ({ onPrevClick }) => {
   return (
    <button onClick={onPrevClick} className='previous-btn'>Previous</button>
  )};

export default PreviousBtn;

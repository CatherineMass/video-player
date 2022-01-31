/* eslint-disable react/prop-types */
import React from 'react';

// Putting it on line didn't work, got error saying return statement is missing.

const NextBtn = ({ onNextClick }) => {
return (
  <button onClick={onNextClick} className='next-btn'>Next</button>
)};

export default NextBtn;

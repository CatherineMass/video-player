import React from 'react';
import heart from '../heart.svg';

const HeartIcon = () => {
  return (
    <img src={heart} alt='heart-favorite' style={{width: '20px', height: '20px'}}/>
  );
};

export default HeartIcon;

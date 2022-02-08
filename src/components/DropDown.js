/* eslint-disable react/prop-types */
import React from 'react';

const DropDown = ({ options }) => {
  return (
    <div className='drop-down__list'>
      {options.map(option => {
        <button key={option.id}>{option.name}</button>
      })}
    </div>
  );
};

export default DropDown;

/* eslint-disable react/prop-types */
import React from 'react';

const BtnFavorites = ({ onClickFav }) => {
  return (
    <button 
    className="btn-favorites" 
    type="button" 
    onClick={onClickFav}
  >
    My Favorites
  </button>
  );
};

export default BtnFavorites;

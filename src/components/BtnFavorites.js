/* eslint-disable react/prop-types */
import React from 'react';

const BtnFavorites = ({ onClickFav }) => {
  return (
    <button 
    className="btn-favorites" 
    type="button" 
    style={{width: '7rem', height: '2em', backgroundColor: 'white', textAlign: 'center'}}
    onClick={onClickFav}
  >
    My Favorites
  </button>
  );
};

export default BtnFavorites;

/* eslint-disable react/prop-types */
import React, { MouseEventHandler } from 'react';

type Props = {
  onClickFav: MouseEventHandler,
}

const BtnFavorites = ({ onClickFav }: Props) => {
	return (
		<button className="btn-favorites" type="button" onClick={onClickFav}>
      My Favorites
		</button>
	);
};

export default BtnFavorites;

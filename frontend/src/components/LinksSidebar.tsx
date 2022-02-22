/* eslint-disable react/prop-types */
import React from 'react';
import BtnAllVideos from './BtnAllVideos';
import BtnFavorites from './BtnFavorites';

// eslint-disable-next-line react/prop-types
// @ts-ignore
const LinksSidebar = ({ onClickAllVideos, onClickFav }) => {
	return (
		<div className="sidebar-links">
			<BtnFavorites onClickFav={onClickFav} />
			<BtnAllVideos onClickAllVideos={onClickAllVideos} />
		</div>
	);
};

export default LinksSidebar;

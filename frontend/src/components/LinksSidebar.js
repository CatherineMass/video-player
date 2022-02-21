import React from 'react';
import BtnAllVideos from './BtnAllVideos';
import BtnFavorites from './BtnFavorites';

// eslint-disable-next-line react/prop-types
const LinksSidebar = ({ onClickAllVideos, onClickFav }) => {
	return (
		<div className="sidebar-links">
			<BtnFavorites onClickFav={onClickFav} />
			<BtnAllVideos onClickAllVideos={onClickAllVideos} />
		</div>
	);
};

export default LinksSidebar;

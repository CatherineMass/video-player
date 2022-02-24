import React from 'react';
import { AppProps } from '../AppProps';
import BtnAllVideos from './BtnAllVideos';
import BtnFavorites from './BtnFavorites';

interface Props {
	onClickAllVideos: AppProps['noParamVoid'];
	onClickFav: AppProps['noParamVoid'];
}

const LinksSidebar: React.FC<Props> = ({ onClickAllVideos, onClickFav }) => {
	return (
		<div className="sidebar-links">
			<BtnFavorites onClickFav={onClickFav} />
			<BtnAllVideos onClickAllVideos={onClickAllVideos} />
		</div>
	);
};

export default LinksSidebar;

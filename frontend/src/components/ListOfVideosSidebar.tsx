import React from 'react';
import ListAllVideos from './ListAllVideos';
import ListFavorites from './ListFavorites';
import ListDefault from './ListDefault';
import { AppProps } from '../AppProps';

interface Props {
	clickHeart: AppProps['stringVoid'];
	favoritesVideos: AppProps['arrayOfIds'];
	favVideos: AppProps['arrayOfVideos'];
	handleSidebarClick: AppProps['stringVoid'];
	listDefault: AppProps['arrayOfVideos'];
	videoIds: AppProps['arrayOfVideos'];
	visibleAll: boolean;
	visibleFav: boolean;
}

const ListOfVideosSidebar: React.FC<Props> = ({
	videoIds,	visibleAll,	visibleFav,	clickHeart,	favoritesVideos, favVideos, listDefault,handleSidebarClick,
}) => {
	
	return (
		<div className="list-of-videos-sidebar">
			{visibleAll ? (
				<ListAllVideos
					videoIds={videoIds}
					favoritesVideos={favoritesVideos}
					clickHeart={clickHeart}
					handleSidebarClick={handleSidebarClick}
				/>
			) : visibleFav ? (
				<ListFavorites
					favoritesVideos={favoritesVideos}
					favVideos={favVideos}
					clickHeart={clickHeart}
					handleSidebarClick={handleSidebarClick}
				/>
			) : (
				<ListDefault
					listDefault={listDefault}
					videoIds={videoIds}
					favoritesVideos={favoritesVideos}
					clickHeart={clickHeart}
					handleSidebarClick={handleSidebarClick}
				/>
			)}
		</div>
	);
};

export default ListOfVideosSidebar;

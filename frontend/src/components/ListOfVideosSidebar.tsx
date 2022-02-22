/* eslint-disable react/prop-types */
import React from 'react';
import ListAllVideos from './ListAllVideos';
import ListFavorites from './ListFavorites';
import ListDefault from './ListDefault';

const ListOfVideosSidebar = ({
	// @ts-ignore
	defaultVideo,	videoIds,	visibleAll,	visibleFav,	clickHeart,	favoritesVideos, favVideos, listDefault,handleSidebarClick,
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
				// @ts-ignore
					videoIds={videoIds}
					favoritesVideos={favoritesVideos}
					favVideos={favVideos}
					clickHeart={clickHeart}
					handleSidebarClick={handleSidebarClick}
				/>
			) : (
				<ListDefault
				// @ts-ignore
					defaultVideo={defaultVideo}
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
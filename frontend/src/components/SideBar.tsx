import React, { useState, useEffect } from 'react';
import ListOfVideosSidebar from './ListOfVideosSidebar';
import LinksSidebar from './LinksSidebar';
import { AppProps } from '../AppProps';

interface Props {
	handleSidebarClick: AppProps['stringVoid'];
	listDefault: AppProps['arrayOfVideos'];
	videoIds: AppProps['arrayOfVideos'];
}

const SideBar: React.FC<Props> = ({
	videoIds,
	listDefault,
	handleSidebarClick,
}) => {
	// Button All
	const [visibleAll, setVisibleAll] = useState(false);
	const onClickAllVideos = () => {
		setVisibleAll(!visibleAll);
		setVisibleFav(false);
	};

	// Button Favorites
	const [visibleFav, setVisibleFav] = useState(false);
	const onClickFav = () => {
		setVisibleFav(!visibleFav);
		setVisibleAll(false);
	};

	// Click heart function
	// Array of ids
	const [favoritesVideos, setFavoritesVideos] = useState<
		AppProps['arrayOfIds']
	>(() => {
		const localFavoritesId = localStorage.getItem('favoriteId');
		return localFavoritesId ? JSON.parse(localFavoritesId) : [];
	});
	// Array of objects
	const [favVideos, setFavVideos] = useState<
		AppProps['arrayOfVideos']>(() => {
			const localFavorites = localStorage.getItem('favoriteObj');
			return localFavorites ? JSON.parse(localFavorites) : [];
		});

	const clickHeart: AppProps['stringVoid'] = (id) => {
		const fav = videoIds.find((video) => video.id?.videoId === id);
		if (favoritesVideos.includes(id)) {
			setFavoritesVideos(favoritesVideos.filter((videoId) => videoId !== id));
		} else {
			setFavoritesVideos([...favoritesVideos, id]);
		}
		// Put favorite videos in an array
		const stringFavVideos =
			favVideos.map((vid) => JSON.stringify(vid));
			
		stringFavVideos && stringFavVideos.includes(JSON.stringify(fav))
			? setFavVideos(
				favVideos.filter(
					(video) => JSON.stringify(video) !== JSON.stringify(fav)
				)
			)
			: fav && setFavVideos([...favVideos, fav]);
	};

	// Store favorite videos object in local storage
	useEffect(() => {
		localStorage.setItem('favoriteObj', JSON.stringify(favVideos));
	}, [favVideos]);

	// Store favorite videos' ids in local storage
	useEffect(() => {
		localStorage.setItem('favoriteId', JSON.stringify(favoritesVideos));
	}, [favoritesVideos]);

	return (
		<div className="side-bar-container">
			<LinksSidebar
				onClickAllVideos={onClickAllVideos}
				onClickFav={onClickFav}
			/>
			<ListOfVideosSidebar
				clickHeart={clickHeart}
				handleSidebarClick={handleSidebarClick}
				listDefault={listDefault}
				videoIds={videoIds}
				visibleAll={visibleAll}
				visibleFav={visibleFav}
				favoritesVideos={favoritesVideos}
				favVideos={favVideos}
			/>
		</div>
	);
};

export default SideBar;

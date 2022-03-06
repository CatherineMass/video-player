import React from 'react';
import { AppProps } from '../AppProps';
import VideoTag from './VideoTag';

interface Props {
	clickHeart: AppProps['stringVoid'];
	favoritesVideos: AppProps['arrayOfIds'];
	handleSidebarClick: AppProps['stringVoid'];
	listDefault: AppProps['arrayOfVideos'];
	videoIds: AppProps['arrayOfVideos'];
}

const ListDefault: React.FC<Props> = ({
	listDefault, favoritesVideos, clickHeart, handleSidebarClick,
}) => {
	return (
		<div className="list-default">
			{listDefault.length !== 0 &&
				listDefault.map((video) => (
					<VideoTag
						videoName={video?.id?.name}
						videoId={video?.id?.videoId}
						key={video?.id?.videoId}
						favoritesVideos={favoritesVideos}
						clickHeart={clickHeart}
						handleSidebarClick={handleSidebarClick}
					/>
				))}
		</div>
	);
};

export default ListDefault;

import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { AppProps } from '../AppProps';
import BtnVideoName from './BtnVideoName';

interface Props {
	clickHeart: AppProps['stringVoid'];
	favoritesVideos: AppProps['arrayOfIds'];
	handleSidebarClick: AppProps['handleSidebarClick'];
	videoId: string;
	videoName: string | null;
}

const VideoTag: React.FC<Props> = ({
	videoName, videoId,	favoritesVideos, clickHeart, handleSidebarClick,
}) => {
	return (
		<div>
			<BtnVideoName
				videoName={videoName}
				videoId={videoId}
				handleSidebarClick={handleSidebarClick}
			/>
			<button
				className="btn-heart"
				type="button"
				alt="heart-favorite"
				id={videoId}
				onClick={() => clickHeart(videoId)}
			>
				{favoritesVideos.includes(videoId) ? (
					<FaHeart color="red" />
				) : (
					<FaHeart color="grey" />
				)}
			</button>
		</div>
	);
};

export default VideoTag;

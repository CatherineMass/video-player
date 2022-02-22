/* eslint-disable react/prop-types */
import React from 'react';
import { FaHeart } from 'react-icons/fa';
import BtnVideoName from './BtnVideoName';


const VideoTag = ({
// @ts-ignore
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
				// @ts-ignore
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

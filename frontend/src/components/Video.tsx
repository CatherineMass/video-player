/* eslint-disable react/prop-types */
import React from 'react';

//@ts-ignore 
const Video = ({ currentVideo, sendVideoToSidebar }) => {
	const youtubeVideoId = currentVideo?.id?.videoId;

	return (
		<iframe
			className="video"
			onLoad={sendVideoToSidebar}
			width="500"
			height="300"
			src={`https://www.youtube-nocookie.com/embed/${youtubeVideoId}`}
			title="YouTube video player"
			frameBorder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowFullScreen
		></iframe>
	);
};

// Default video to put in ==> if favorite, 1st favorite, if no fav, 1st of the list.

export default Video;

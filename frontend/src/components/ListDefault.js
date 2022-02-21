/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable react/prop-types */
import React from 'react';
import VideoTag from './VideoTag';

const ListDefault = ({
	listDefault,
	favoritesVideos,
	clickHeart,
	handleSidebarClick,
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

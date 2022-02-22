/* eslint-disable react/prop-types */
import React, { MouseEventHandler } from 'react';

type Props = {
	videoName: string;
	videoId: string;
  handleSidebarClick: MouseEventHandler;
}

const BtnVideoName = ({ videoName, videoId, handleSidebarClick }: Props) => {
	
	return (
		<button
			className="btn-video-name"
			type="button"
			// @ts-ignore
			onClick={() => handleSidebarClick(videoId)}
		>
			{videoName} #{videoId}
		</button>
	);
};

export default BtnVideoName;

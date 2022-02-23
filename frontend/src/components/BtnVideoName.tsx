/* eslint-disable react/prop-types */
import React, { MouseEventHandler } from 'react';

type Props = {
	videoName: string;
	videoId: string;
  handleSidebarClick: () => void;
}

const BtnVideoName: React.FC<Props> = ({ videoName, videoId, handleSidebarClick }) => {
	return (
		<button
			className="btn-video-name"
			type="button"
			onClick={() => handleSidebarClick(videoId)}
		>
			{videoName} #{videoId}
		</button>
	);
};

export default BtnVideoName;

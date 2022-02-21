/* eslint-disable react/prop-types */
import React, { MouseEventHandler } from 'react';

type Props = {
  onClickAllVideos: MouseEventHandler;
}

const BtnAllVideos = ({ onClickAllVideos }: Props) => {
	return (
		<button
			className="btn-all-videos"
			type="button"
			onClick={onClickAllVideos}
		>
      All Videos
		</button>
	);
};

export default BtnAllVideos;

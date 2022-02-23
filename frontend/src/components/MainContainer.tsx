/* eslint-disable react/prop-types */
import React from 'react';
import SearchBar from './SearchBar';
import Video from './Video';
import BtnGroup from './BtnGroup';
import logo from '../logo.svg';
import { AppProps } from '../AppProps';

interface Props {
	currentVideo: AppProps['video'];
	defaultVideo: AppProps['video'];
	// filteredList:
	handleFilter: AppProps['handleFilter'];
	handleSearch: AppProps['handleSearch'];
	nextClick: AppProps['nextClick'];
	prevClick: AppProps['previousClick'];
	sendVideoToSidebar: AppProps['sendVideoToSidebar'];
}

const MainContainer: React.FC<Props> = ({
	defaultVideo,	handleFilter,	filteredList,	handleSearch, currentVideo, nextClick,	prevClick, sendVideoToSidebar,
}) => {
	return (
		<div className="main-container">
			<img src={logo} alt="logo" className="logo" />
			<SearchBar
				handleFilter={handleFilter}
				filteredList={filteredList}
				handleSearch={handleSearch}
			/>
			<div className="video-and-btn-container">
				<Video
					currentVideo={currentVideo}
					defaultVideo={defaultVideo}
					sendVideoToSidebar={sendVideoToSidebar}
				/>
				<BtnGroup onNextClick={nextClick} onPrevClick={prevClick} />
			</div>
		</div>
	);
};

export default MainContainer;

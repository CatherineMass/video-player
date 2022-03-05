import React, { useEffect, useState } from 'react';
import './App.css';
import { AppProps } from './AppProps';
import MainContainer from './components/MainContainer';
import SideBar from './components/SideBar';

function App() {
	const [videoIds, setVideoIds] = useState<AppProps['arrayOfVideos']>([]);
	// const [defaultVideo, setDefaultVideo] = useState<AppProps['video']>({} as AppProps['video']);

	const getVideos = async () => {
		const response = await fetch(
			'http://localhost:3005/api/v1/videos', {
				method: 'GET',
				headers: { 'Content-Type': 'application/json' },
				credentials: 'include',
			}
		);
		const data = await response.json();
		console.log(response);
		
		setVideoIds(data.videos);
		// setDefaultVideo(data.videos[0]);
	};
	

	useEffect(() => {
		getVideos();
	}, []);

	// Previous and Next buttons:
	const [currentIndex, setCurrentIndex] = useState(0);
	const currentVideo = videoIds[currentIndex];
	
	// Next Button
	const nextClick = () => {
		currentIndex < videoIds.length - 1
			? setCurrentIndex(currentIndex + 1)
			: alert('This is the end of the playlist!');
	};

	// Previous Button
	const prevClick = () => {
		currentIndex > 0
			? setCurrentIndex(currentIndex - 1)
			: alert('No more videos! Try clicking Next instead.');
	};

	// Search bar ==> To filter suggestions based on user input:
	const [filteredList, setFilteredList] = useState<AppProps['arrayOfVideos']>([]);
	
	let searchWord = '';

	const handleFilter: AppProps['handleFilter'] = (e) => {
		searchWord = e.target.value;
		const newFilter = videoIds.filter(
			(video) =>
				typeof video?.id?.name === 'string' &&
				video?.id?.name.toLowerCase().includes(searchWord.toLowerCase())
		);
		searchWord === '' ? setFilteredList([]) : setFilteredList(newFilter);
	};

	// Handle search from suggestions
	const handleSearch: AppProps['handleSearch'] = (id, video) => {		
		const indexVideoSearched = videoIds.findIndex(
			(video) => video?.id?.videoId === id
		);
		setCurrentIndex(indexVideoSearched);
		sendVideoToSidebar(JSON.stringify(video), video);
	};

	// Sidebar default list:
	const [listDefault, setListDefault] = useState<AppProps['arrayOfVideos']>([]);

	const sendVideoToSidebar: AppProps['sendVideoToSidebar'] = (stringifiedVid, video) => {		
		const stringListDef = listDefault.map((vid) => JSON.stringify(vid));
		video &&
			!stringListDef.includes(stringifiedVid) &&
			setListDefault([...listDefault, video]);
	};

	// When link sideBar clicked:
	const handleSidebarClick: AppProps['stringVoid'] = (id) => {
		const indexVideoSearched = videoIds.findIndex(
			(video) => video?.id?.videoId === id
		);
		setCurrentIndex(indexVideoSearched);
	};

	return (
		<div className="App">
			<MainContainer
				handleFilter={handleFilter}
				handleSearch={handleSearch}
				nextClick={nextClick}
				prevClick={prevClick}
				sendVideoToSidebar={sendVideoToSidebar}
				filteredList={filteredList}
				currentVideo={currentVideo}
			/>
			<SideBar
				handleSidebarClick={handleSidebarClick}
				listDefault={listDefault}
				videoIds={videoIds}
			/>
		</div>
	);
}

export default App;

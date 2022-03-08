import React, { useEffect, useState } from 'react';
import './App.css';
import { AppProps } from './AppProps';
import MainContainer from './components/MainContainer';
import SideBar from './components/SideBar';

function App() {
  const [videoIds, setVideoIds] = useState<AppProps['arrayOfVideos']>([]);
  // const [defaultVideo, setDefaultVideo] = useState<AppProps['video']>({} as AppProps['video']);

  const getVideos = async () => {    
    const response = await fetch(`${process.env.REACT_APP_SERVER}/api/v1/videos`, {
      method: 'GET',
      credentials: 'include',
    });

    const data = await response.json();

    setVideoIds(data.resVideos);
    // setDefaultVideo(data.videos[0]);
  };
  // console.log(videoIds);

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
  const [filteredList, setFilteredList] = useState<AppProps['arrayOfVideos']>(
    []
  );

  let searchWord = '';

  const handleFilter: AppProps['handleFilter'] = (e) => {
    searchWord = e.target.value;
    const newFilter = videoIds.filter(
      (video) =>
        typeof video?.id?.name === 'string' &&
        video?.id?.name.toLowerCase().includes(searchWord.toLowerCase())
    );
    setFilteredList(searchWord.replace(/\s+/g, '') === '' ? [] : newFilter);
    // if (filteredList.length === 0) {fetchYoutube();}
  };

  // const fetchYoutube = () => {
  //   console.log('Oups, we need to get videos from youtube');
  // };
  // searchWord && !filteredList.length && fetchYoutube(); // doesn't work.
  //  youtube api search: options I will need => videoEmbeddable: true, type: video, q: searchWord

  // Handle search from suggestions
  const handleSearch: AppProps['handleSearch'] = (id, video) => {
    const indexVideoSearched = videoIds.findIndex(
      (video) => video?.id?.videoId === id
    );
    setCurrentIndex(indexVideoSearched);
    sendVideoToSidebar(JSON.stringify(video), video);
  };

  // Sidebar default list:
  const [defaultList, setDefaultList] = useState<AppProps['arrayOfVideos']>([]);

  const sendVideoToSidebar: AppProps['sendVideoToSidebar'] = (
    stringifiedVid,
    video
  ) => {
    const stringListDef = defaultList.map((vid) => JSON.stringify(vid));
    video &&
      !stringListDef.includes(stringifiedVid) &&
      setDefaultList([...defaultList, video]);
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
        defaultList={defaultList}
        videoIds={videoIds}
      />
    </div>
  );
}

export default App;

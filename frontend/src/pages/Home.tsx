import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import { AppProps } from '../AppProps';
import MainContainer from '../components/MainContainer';
import SideBar from '../components/SideBar';
import { useAuth } from '../providers/AuthProvider';

const Home = () => {
  const navigate = useNavigate();
  const {signout, authed} = useAuth();
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

  const handleFilter: AppProps['handleFilter'] = async (e) => {
    searchWord = e.target.value;

    const response = await fetch(`${process.env.REACT_APP_SERVER}/api/v1/search`, {
      method: 'POST',
      headers: { 
        'Accept': 'application/json',
        'Content-Type': 'application/json' 
      },
      credentials: 'include',
      body: JSON.stringify({'q': `${searchWord}`})
    });
    const searchRes = await response.json();    
    const searchResult = searchRes.videos;

    setFilteredList([...searchResult]);
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

  // Check if logged in ==> cannot be useEffect here. UseEffect has to be after an async function, not just on its own.
  // useEffect(() => {

  //   ping();
  // }, []);



  const logoutHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    signout(() => navigate('/login'));
    console.log('logout ', authed);

    // try {
    //   const response = await fetch(`${process.env.REACT_APP_SERVER}/api/v1/log`, {
    //     method: 'GET',
    //     credentials: 'include',
    //   });
    //   const data = await response.json();
    //   if (data) {}

    // } catch (err) {
    //   console.log(err);
    // }
  };

  return (
    <div className="App">
      <div className='header'>
        <p className='username'>Username</p>
        <button className='logout-btn' type='button' onClick={logoutHandler}>Logout</button>
      </div>
      <div className='main'>
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
    </div>
  );
};

export default Home;

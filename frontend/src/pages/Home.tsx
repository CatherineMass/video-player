import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import { AppProps } from '../AppProps';
import MainContainer from '../components/MainContainer';
import SideBar from '../components/SideBar';
import { useAuth } from '../providers/AuthProvider';

const Home = () => {
  const navigate = useNavigate();
  const {signout} = useAuth();
  const [videoIds, setVideoIds] = useState<AppProps['arrayOfVideos']>([]);
  // const [defaultVideo, setDefaultVideo] = useState<AppProps['video']>({} as AppProps['video']);

  const token = sessionStorage.getItem('token');
  const username = sessionStorage.getItem('username');

  const getVideos = async () => {    
    const response = await fetch(`${process.env.REACT_APP_SERVER}/api/v1/videos`, {
      method: 'POST',
      headers: { 
        'Accept': 'application/json',
        'Content-Type': 'application/json' 
      },
      credentials: 'include',
      body: JSON.stringify({ token, username })
    });

    const data = await response.json();

    setVideoIds(data.data.resVideos);
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
      body: JSON.stringify({'q': `${searchWord}`, token, username})
    });
    const data = await response.json();    
    const searchResult = data.data.videos;

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

  // Logout:
  const logoutHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    try {
      const response = await fetch(`${process.env.REACT_APP_SERVER}/api/v1/logout`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username }),
        credentials: 'include',
      });
      const data = await response.json();
      if (response.status === 401) {
        console.error(data);
        navigate('/login');
      }
      signout(() => navigate('/login'));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="App">
      <div className='header'>
        <p className='username'>{sessionStorage.username}</p>
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

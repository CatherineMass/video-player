import React from 'react';
import './App.css';
import MainContainer from './components/MainContainer';
import SideBar from './components/SideBar';
import { useEffect, useState } from 'react';
// import ExampleComponent from './ExampleComponent';

function App() {

  const [videoIds, setVideoIds] = useState([]);
  const [defaultVideo, setDefaultVideo] = useState({});

  // getVideos() function has been provided to you free of charge.
  // You can log the data to see what it looks like or look at 
  // the react dev tools to observe the stored information.

  const getVideos = async () => {
    const response = await fetch('https://youtube-api-smartcoding-2022.herokuapp.com/videos');
    const data = await response.json();
    setVideoIds(data);
    setDefaultVideo(data.videos[0]);
 
  }
  
  // NOTES: A component can have more than one useEffect hook
  useEffect(() => {
    getVideos();
  }, []);

  // const arrayOfVideos = videoIds.videos;
  
  // The array below is needed for the code to work. No access to the data.
  const arrayOfVideos = [
    {
        "kind": "youtube#searchResult",
        "etag": "tamwb8xWafaFK3WYUiRjWVPKOCM",
        "id": {
        "kind": "youtube#video",
        "videoId": "_3ngiSxVCBs",
        "name": "a nice video"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "n9DniKGa4RMTCv9hs3aOcxsSzPY",
        "id": {
        "kind": "youtube#video",
        "videoId": "3zTR4ayDG38",
        "name": "a cool video"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "I_vfY1pIPWvk49XZ_WWkBynL88U",
        "id": {
        "kind": "youtube#video",
        "videoId": "aSJUS2tymZA",
        "name": "a fantastic video"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "fVwysHySGlQcaVwDLkjtP1DDWFk",
        "id": {
        "kind": "youtube#video",
        "videoId": "6zEIvZqs0-Y",
        "name": "yet another cool video"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "lw9CuIh2Zla8HqQdq78u4sTaVIk",
        "id": {
        "kind": "youtube#video",
        "videoId": "pJuq8D1NGJQ",
        "name": "Encore another video"
        }
    }
  ];

  // Click link on the sidebar
  // currentVideo = videoIds.filter(video => video.id.videoId == videoId)
  // setCurrentIndex(indexOf(currentVideo))
  // 
  // ==> need to lift previous and next functions up to update setCurrentIndex. Or UseContext?
  
  const [filteredList, setFilteredList] = useState([]);

  const handleFilter = (e) => {
    const searchWord = e.target.value;
    const newFilter = videoIds.filter((video) => video?.id?.name.toLowerCase().includes(searchWord.toLowerCase()));

    searchWord === "" ? setFilteredList([]) : setFilteredList(newFilter);
  };

  return (
    <div className="App">
      <MainContainer defaultVideo={defaultVideo} videoIds={arrayOfVideos} handleFilter={handleFilter} filteredList={filteredList} />
      <SideBar defaultVideo={defaultVideo} videoIds={arrayOfVideos}/>
    </div>
  );
}

export default App;
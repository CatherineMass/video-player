import React, { useEffect, useState } from "react";
import "./App.css";
import MainContainer from "./components/MainContainer";
import SideBar from "./components/SideBar";

function App() {
  const [videoIds, setVideoIds] = useState([]);
  const [defaultVideo, setDefaultVideo] = useState({});

  // getVideos() function has been provided to you free of charge.
  // You can log the data to see what it looks like or look at
  // the react dev tools to observe the stored information.

  const getVideos = async () => {
    const response = await fetch(
      "https://youtube-api-smartcoding-2022.herokuapp.com/videos"
    );
    const data = await response.json();
    setVideoIds(data);
    setDefaultVideo(data.videos[0]);
  };

  // NOTES: A component can have more than one useEffect hook
  useEffect(() => {
    getVideos();
  }, []);

  // const arrayOfVideos = videoIds.videos;

  // The array below is needed for the code to work. No access to the data.
  const arrayOfVideos = [
    {
      kind: "youtube#searchResult",
      etag: "tamwb8xWafaFK3WYUiRjWVPKOCM",
      id: {
        kind: "youtube#video",
        videoId: "_3ngiSxVCBs",
        name: "a nice video",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "n9DniKGa4RMTCv9hs3aOcxsSzPY",
      id: {
        kind: "youtube#video",
        videoId: "3zTR4ayDG38",
        name: "a cool video",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "I_vfY1pIPWvk49XZ_WWkBynL88U",
      id: {
        kind: "youtube#video",
        videoId: "aSJUS2tymZA",
        name: "a fantastic video",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "fVwysHySGlQcaVwDLkjtP1DDWFk",
      id: {
        kind: "youtube#video",
        videoId: "6zEIvZqs0-Y",
        name: "yet another cool video",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "lw9CuIh2Zla8HqQdq78u4sTaVIk",
      id: {
        kind: "youtube#video",
        videoId: "pJuq8D1NGJQ",
        name: "Encore another video",
      },
    },
  ];

  // Previous and Next buttons:
  let [currentIndex, setCurrentIndex] = useState(0);
  let currentVideo = arrayOfVideos[currentIndex];

  // Next Button
  const nextClick = () => {
    currentIndex < arrayOfVideos.length - 1
      ? setCurrentIndex(currentIndex + 1)
      : alert("This is the end of the playlist!");
  };

  // Previous Button
  const prevClick = () => {
    currentIndex > 0
      ? setCurrentIndex(currentIndex - 1)
      : alert("No more videos! Try clicking Next instead.");
  };

  // Search bar ==> To filter suggestions based on user input:
  const [filteredList, setFilteredList] = useState([]);
  let searchWord = "";

  const handleFilter = (e) => {
    searchWord = e.target.value;
    const newFilter = arrayOfVideos.filter((video) =>
      video?.id?.name.toLowerCase().includes(searchWord.toLowerCase())
    );

    searchWord === "" ? setFilteredList([]) : setFilteredList(newFilter);
  };

  // Handle search from suggestions
  const placeholder = "Search a video";
  // Sidebar default list:
  const [listDefault, setListDefault] = useState([]);
  // const [defaultToDisplay, setDefaultToDisplay] = useState([]);

  const handleSearch = (id) => {
    const indexVideoSearched = arrayOfVideos.findIndex(
      (video) => video?.id?.videoId === id
    );
    setCurrentIndex(indexVideoSearched);
  };

  const sendVideoToSidebar = (video, id) => {
    const stringListDef = listDefault.map(video => JSON.stringify(video));
    !stringListDef.includes(JSON.stringify(video)) && setListDefault([...listDefault, video]);
  };

  // console.log(listDefault);

  // When link sideBar clicked:
  const handleSidebarClick = (id) => {
    const indexVideoSearched = arrayOfVideos.findIndex(
      (video) => video?.id?.videoId === id
    );
    setCurrentIndex(indexVideoSearched);
  };

  return (
    <div className="App">
      <MainContainer
        defaultVideo={defaultVideo}
        videoIds={arrayOfVideos}
        handleFilter={handleFilter}
        filteredList={filteredList}
        handleSearch={handleSearch}
        placeholder={placeholder}
        currentIndex={currentIndex}
        currentVideo={currentVideo}
        nextClick={nextClick}
        prevClick={prevClick}
        sendVideoToSidebar={sendVideoToSidebar}
      />
      <SideBar
        defaultVideo={defaultVideo}
        listDefault={listDefault}
        videoIds={arrayOfVideos}
        handleSidebarClick={handleSidebarClick}
      />
    </div>
  );
}

export default App;

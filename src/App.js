import React, { useEffect, useState } from "react";
import "./App.css";
import MainContainer from "./components/MainContainer";
import SideBar from "./components/SideBar";

function App() {
  const [videoIds, setVideoIds] = useState([]);
  const [defaultVideo, setDefaultVideo] = useState({});

  const getVideos = async () => {
    const response = await fetch(
      "https://youtube-api-smartcoding-2022.herokuapp.com/videos"
    );
    const data = await response.json();
    setVideoIds(data.videos);
    setDefaultVideo(data.videos[0]);
  };

  useEffect(() => {
    getVideos();
  }, []);

  const arrayOfVideos = videoIds;

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

  const handleSearch = (id) => {
    const indexVideoSearched = arrayOfVideos.findIndex(
      (video) => video?.id?.videoId === id
    );
    setCurrentIndex(indexVideoSearched);
  };

  // Sidebar default list:
  const [listDefault, setListDefault] = useState([]);

  const sendVideoToSidebar = (video) => {
    const stringListDef = listDefault.map((vid) => JSON.stringify(vid));
    !stringListDef.includes(JSON.stringify(video)) &&
      setListDefault([...listDefault, video]);
  };

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
        handleFilter={handleFilter}
        handleSearch={handleSearch}
        nextClick={nextClick}
        prevClick={prevClick}
        sendVideoToSidebar={sendVideoToSidebar}
        defaultVideo={defaultVideo}
        videoIds={arrayOfVideos}
        filteredList={filteredList}
        placeholder={placeholder}
        currentIndex={currentIndex}
        currentVideo={currentVideo}
      />
      <SideBar
        handleSidebarClick={handleSidebarClick}
        defaultVideo={defaultVideo}
        listDefault={listDefault}
        videoIds={arrayOfVideos}
      />
    </div>
  );
}

export default App;

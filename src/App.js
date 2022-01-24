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


  
  return (
    <div className="App">
      <MainContainer defaultVideo={defaultVideo} />
      <SideBar defaultVideo={defaultVideo} videoList={videoIds}/>
    </div>
  );
}

export default App;



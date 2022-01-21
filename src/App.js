import './App.css';
import { useEffect, useState } from 'react';
import ExampleComponent from './ExampleComponent';

function App() {

  const [videoIds, setVideoIds] = useState([]);
  
  // getVideos() function has been provided to you free of charge.
  // You can log the data to see what it looks like or look at 
  // the react dev tools to observe the stored information.
  const getVideos = async () => {
    const response = await fetch('http://localhost:3001/videos');
    const data = await response.json();
    setVideoIds(data);
  }
  
  // NOTES: A component can have more than one useEffect hook
  useEffect(() => {
    getVideos();
  }, []);

  
  return (
    <div className="App">

      {/* Remove code below, the data of interest uses a `videoId`, iframes a way for Youtube to enable people load and show videos on a website. 
      Below is an example of an iframe of you on the page. Feel free to open the ExampleComponent. 

      When submitting your project, remove this component and replace it with your solution.
      */}
      <ExampleComponent/>
       
    </div>
  );
}

export default App;

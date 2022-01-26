import BtnVideoName from './BtnVideoName';
import { FaHeart } from 'react-icons/fa';


const VideoTag = ({ videoName, videoId, clickedHeart, setClickedHeart }) => {

  const clickHeart = (videoId) => videoId && setClickedHeart(!clickedHeart);

  return (
    <div>
    <BtnVideoName videoName={videoName} videoId={videoId} />
    <button 
      type='button' 
      alt='heart-favorite' 
      id={videoId}
      style={{paddingTop:'.3em', width: '30px', height: '20px', border:'none', backgroundColor:'white'}}
      onClick={clickHeart}
    >
      {clickedHeart ? <FaHeart color='red'/> : <FaHeart color='grey'/>}
    </button>
  </div>
  );
};

export default VideoTag;

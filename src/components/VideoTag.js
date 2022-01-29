import BtnVideoName from './BtnVideoName';
import { FaHeart } from 'react-icons/fa';


const VideoTag = ({ videoName, videoId, clickedHeart, setClickedHeart, clickHeart }) => {


  return (
    <div>
    <BtnVideoName videoName={videoName} videoId={videoId} />
    <button 
      className='btn-heart'
      type='button' 
      alt='heart-favorite' 
      id={videoId}
      onClick={clickHeart}
    >
      {clickedHeart ? <FaHeart color='red'/> : <FaHeart color='grey'/>}
    </button>
  </div>
  );
};

export default VideoTag;

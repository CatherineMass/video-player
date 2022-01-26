import BtnVideoName from './BtnVideoName';
import HeartIcon from './HeartIcon';

const VideoTag = ({ videoName, videoId }) => {
  return (
    <div>
    <BtnVideoName videoName={videoName} videoId={videoId} />
    <HeartIcon />
  </div>
  );
};

export default VideoTag;



const BtnVideoName = ({ videoName, videoId }) => {


  return (
    <button className="btn-video-name" type="button">
      {videoName} #{videoId}
    </button>
  );
};

export default BtnVideoName;

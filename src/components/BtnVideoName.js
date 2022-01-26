

const BtnVideoName = ({ videoName, videoId }) => {


  return (
    <button 
      className="btn-link btn-video-name" 
      type="button" 
      style={{width: '16rem', height: '2em', border: 'none', backgroundColor: 'white', textAlign: 'left'}}
    >
      {videoName} #{videoId}
    </button>
  );
};

export default BtnVideoName;

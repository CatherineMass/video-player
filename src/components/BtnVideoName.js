

const BtnVideoName = ({ defaultVideo }) => {
  const videoName = defaultVideo?.id?.name;
  const videoId = defaultVideo?.id?.videoId;

  return (
    <button 
      className="btn-link btn-video-name" 
      type="button" 
      style={{width: '12rem', height: '2em', border: 'none', backgroundColor: 'white', textAlign: 'left'}}
    >
      {videoName} #{videoId}
    </button>
  );
};

export default BtnVideoName;


const Video = ({ video }) => {
  const youtubeVideoId = video?.id?.videoId;

    return (
      <iframe 
        style={{border: '5px solid red', display: 'flex', justifyContent: 'center'}}
        width="500" height="300" 
        src={`https://www.youtube.com/embed/${youtubeVideoId}`} 
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
  );
};

// Default video to put in ==> if favorite, 1st favorite, if no fav, 1st of the list.

export default Video;
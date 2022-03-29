import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { AppProps } from '../AppProps';
import BtnVideoName from './BtnVideoName';

interface Props {
	clickHeart: AppProps['stringVoid'];
	handleSidebarClick: AppProps['stringVoid'];
  favVideos: AppProps['arrayOfVideos'];
	videoId: string;
	videoName: string | null;
}

const VideoTag: React.FC<Props> = ({
  videoName, videoId, favVideos, clickHeart, handleSidebarClick,
}) => {
  const favorites = favVideos.map(video => video.id.videoId);

  return (
    <div>
      <BtnVideoName
        videoName={videoName}
        videoId={videoId}
        handleSidebarClick={handleSidebarClick}
      />
      <button
        className="btn-heart"
        type="button"
        id={videoId}
        onClick={() => clickHeart(videoId)}
      >
        {favorites.includes(videoId) ? (
          <FaHeart color="red" />
        ) : (
          <FaHeart color="grey" />
        )}
      </button>
    </div>
  );
};

export default VideoTag;

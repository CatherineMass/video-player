import React from 'react';
import { AppProps } from '../../AppProps';
import VideoTag from '../main/VideoTag';

interface Props {
	clickHeart: AppProps['stringVoid'];
	handleSidebarClick: AppProps['stringVoid'];
  favVideos: AppProps['arrayOfVideos'];
	videoIds: AppProps['arrayOfVideos'];
}

const ListAllVideos: React.FC<Props> = ({
  videoIds, favVideos, clickHeart, handleSidebarClick,
}) => {
	
  return (
    <div className="list-all-videos">
      {videoIds.map((video) => (
        <VideoTag
          videoName={video?.id?.name}
          videoId={video?.id?.videoId}
          key={video?.id?.videoId}
          favVideos={favVideos}
          clickHeart={clickHeart}
          handleSidebarClick={handleSidebarClick}
        />
      ))}
    </div>
  );
};

export default ListAllVideos;

import React from 'react';
import { AppProps } from '../AppProps';
import VideoTag from './VideoTag';

interface Props {
	clickHeart: AppProps['stringVoid'];
	favVideos: AppProps['arrayOfVideos'];
	handleSidebarClick: AppProps['stringVoid'];
}

const ListFavorites: React.FC<Props> = ({
  clickHeart, favVideos, handleSidebarClick,
}) => {
	
  return (
    <div className="list-favorites">
      {favVideos && favVideos.map((video) => (
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

export default ListFavorites;

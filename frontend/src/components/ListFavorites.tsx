import React from 'react';
import { AppProps } from '../AppProps';
import VideoTag from './VideoTag';

interface Props {
	clickHeart: AppProps['stringVoid'];
	favoritesVideos: AppProps['arrayOfIds'];
	favVideos: AppProps['arrayOfVideos'];
	handleSidebarClick: AppProps['stringVoid'];
}

const ListFavorites: React.FC<Props> = ({
  clickHeart,	favoritesVideos, favVideos,	handleSidebarClick,
}) => {
	
  return (
    <div className="list-favorites">
      {favVideos && favVideos.map((video) => (
        <VideoTag
          videoName={video?.id?.name}
          videoId={video?.id?.videoId}
          key={video?.id?.videoId}
          clickHeart={clickHeart}
          favoritesVideos={favoritesVideos}
          handleSidebarClick={handleSidebarClick}
        />
      ))}
    </div>
  );
};

export default ListFavorites;

import React from 'react';
import { AppProps } from '../AppProps';
import VideoTag from './VideoTag';

interface Props {
  clickHeart: AppProps['stringVoid'];
  favoritesVideos: AppProps['arrayOfIds'];
  handleSidebarClick: AppProps['stringVoid'];
  defaultList: AppProps['arrayOfVideos'];
  videoIds: AppProps['arrayOfVideos'];
}

const DefaultList: React.FC<Props> = ({
  defaultList,
  favoritesVideos,
  clickHeart,
  handleSidebarClick,
}) => {
  return (
    <div className="list-default">
      {defaultList.length !== 0 &&
        defaultList.map((video) => (
          <VideoTag
            videoName={video?.id?.name}
            videoId={video?.id?.videoId}
            key={video?.id?.videoId}
            favoritesVideos={favoritesVideos}
            clickHeart={clickHeart}
            handleSidebarClick={handleSidebarClick}
          />
        ))}
    </div>
  );
};

export default DefaultList;

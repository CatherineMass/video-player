import React from 'react';
import { AppProps } from '../AppProps';
import VideoTag from './VideoTag';

interface Props {
  clickHeart: AppProps['stringVoid'];
  handleSidebarClick: AppProps['stringVoid'];
  favVideos: AppProps['arrayOfVideos'];
  defaultList: AppProps['arrayOfVideos'];
  videoIds: AppProps['arrayOfVideos'];
}

const DefaultList: React.FC<Props> = ({
  defaultList,
  favVideos,
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
            favVideos={favVideos}
            clickHeart={clickHeart}
            handleSidebarClick={handleSidebarClick}
          />
        ))}
    </div>
  );
};

export default DefaultList;

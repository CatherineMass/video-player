import React from 'react';
import { AppProps } from '../AppProps';
import VideoTag from './VideoTag';

interface Props {
	clickHeart: AppProps['stringVoid'];
	favoritesVideos: AppProps['arrayOfIds'];
	handleSidebarClick: AppProps['stringVoid'];
	videoIds: AppProps['arrayOfVideos'];
}

const ListAllVideos: React.FC<Props> = ({
    videoIds,	favoritesVideos, clickHeart, handleSidebarClick,
}) => {
	
    return (
        <div className="list-all-videos">
            {videoIds.map((video) => (
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

export default ListAllVideos;

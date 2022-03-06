import React from 'react';
import { AppProps } from '../AppProps';

interface Props {
	currentVideo: AppProps['video'];
	sendVideoToSidebar: AppProps['sendVideoToSidebar'];
}

const Video: React.FC<Props> = ({ currentVideo, sendVideoToSidebar }) => {
    const youtubeVideoId: string = currentVideo?.id?.videoId;

    return (
        <iframe
            className="video"
            onLoad={() => sendVideoToSidebar}
            width="500"
            height="300"
            src={`https://www.youtube-nocookie.com/embed/${youtubeVideoId}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        ></iframe>
    );
};

export default Video;

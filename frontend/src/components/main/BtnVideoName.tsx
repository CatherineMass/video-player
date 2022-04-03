import React from 'react';
import { AppProps } from '../../AppProps';

interface Props {
  videoName: string | null;
  videoId: string;
  handleSidebarClick: AppProps['stringVoid'];
}

const BtnVideoName: React.FC<Props> = ({
  videoName,
  videoId,
  handleSidebarClick,
}) => {
  return (
    <button
      className="btn-video-name"
      type="button"
      onClick={() => handleSidebarClick(videoId)}
    >
      {videoName} #{videoId}
    </button>
  );
};

export default BtnVideoName;

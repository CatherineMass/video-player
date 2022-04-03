import React from 'react';
import { AppProps } from '../../AppProps';

interface Props {
  onClickAllVideos: AppProps['noParamVoid'];
}

const BtnAllVideos: React.FC<Props> = ({ onClickAllVideos }) => {
  return (
    <button
      className="btn-all-videos"
      type="button"
      onClick={onClickAllVideos}
    >
      All Videos
    </button>
  );
};

export default BtnAllVideos;

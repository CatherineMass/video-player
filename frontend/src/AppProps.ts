import React from 'react';

type Video = {
  etag: string;
  id: {
    videoId: string;
    name: string;
  }
};


export interface AppProps {
  video: Video;
  arrayOfVideos: Video[];
  arrayOfIds: string[];

  handleFilter: (e: React.ChangeEvent<HTMLInputElement>) => void;
  stringVoid: (id: string) => void;
  handleSearch: (id: string, video: Video) => void;
  noParamVoid: () => void;
  sendVideoToSidebar: (stringifiedVid: string, video: Video) => void;
}

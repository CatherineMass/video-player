import React from 'react';

type Id = {
  id: {
    kind: string;
    videoId: string;
    name: string | null;
  };
}

type Video = {
  id: string;
  video: {
    kind: string;
    etag: string;
    id: Id;
  };
}

export interface AppProps {
  video: Video;
  arrayOfVideos: Video[];
  arrayOfIds: string[];

  handleFilter: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSidebarClick: (id: string) => void;
  stringVoid: (id: string) => void;
  handleSearch: (id: string ,video: Video) => void;
  nextClick: () => void;
  previousClick: () => void;
  noParamVoid: () => void;
  sendVideoToSidebar: (stringifiedVid: string, video: Video) => void;
}

import React from 'react';

type Video = {
  id: string;
  video: {
    kind: string;
    etag: string;
    id: {
      kind: string;
      videoId: string;
      name: string | null;
    };
  };
}

export interface AppProps {
  video: Video;
  videoIds: Video[];

  handleFilter: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSidebarClick: (id: string) => void;
  handleSearch: (id: string ,video: Video) => void;
  nextClick: () => void;
  previousClick: () => void;
  sendVideoToSidebar: (stringifiedVid: string, video: Video) => void;
}

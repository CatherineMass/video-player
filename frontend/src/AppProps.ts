import React from 'react';

type Video = {
  id: number;
  etag: string;
  videoId: string;
  name: string | null;
  created_at: string;
  updated_at: string;
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

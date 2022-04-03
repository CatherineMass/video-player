import React from 'react';

type Video = {
  etag: string;
  id: {
    videoId: string;
    name: string;
  }
};

type Facility = {
  name: string;
  phone: string;
  website: string;
  lat: string;
  lng: string;
}

export interface AppProps {
  video: Video;
  arrayOfVideos: Video[];
  arrayOfIds: string[];
  facilities: Facility[];

  handleFilter: (e: React.ChangeEvent<HTMLInputElement>) => void;
  stringVoid: (id: string) => void;
  handleSearch: (id: string, video: Video) => void;
  noParamVoid: () => void;
  sendVideoToSidebar: (stringifiedVid: string, video: Video) => void;
}

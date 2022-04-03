import React from 'react';
import ListAllVideos from './ListAllVideos';
import ListFavorites from './ListFavorites';
import DefaultList from './DefaultList';
import { AppProps } from '../../AppProps';

interface Props {
	clickHeart: AppProps['stringVoid'];
	favVideos: AppProps['arrayOfVideos'];
	handleSidebarClick: AppProps['stringVoid'];
	defaultList: AppProps['arrayOfVideos'];
	videoIds: AppProps['arrayOfVideos'];
	visibleAll: boolean;
	visibleFav: boolean;
}

const ListOfVideosSidebar: React.FC<Props> = ({
  videoIds,	visibleAll,	visibleFav,	clickHeart, favVideos, defaultList,handleSidebarClick,
}) => {
	
  return (
    <div className="list-of-videos-sidebar">
      {visibleAll ? (
        <ListAllVideos
          videoIds={videoIds}
          favVideos={favVideos}
          clickHeart={clickHeart}
          handleSidebarClick={handleSidebarClick}
        />
      ) : visibleFav ? (
        <ListFavorites
          favVideos={favVideos}
          clickHeart={clickHeart}
          handleSidebarClick={handleSidebarClick}
        />
      ) : (
        <DefaultList
          defaultList={defaultList}
          videoIds={videoIds}
          favVideos={favVideos}
          clickHeart={clickHeart}
          handleSidebarClick={handleSidebarClick}
        />
      )}
    </div>
  );
};

export default ListOfVideosSidebar;

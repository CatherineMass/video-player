/* eslint-disable react/prop-types */
import React from "react";
import ListAllVideos from "./ListAllVideos";
import ListFavorites from "./ListFavorites";
import ListDefault from "./ListDefault";

const ListOfVideosSidebar = ({
  defaultVideo,
  videoIds,
  visibleAll,
  visibleFav,
  clickHeart,
  favoritesVideos,
  favVideos,
  listDefault
}) => {
  return (
    <div className="list-of-videos-sidebar">
      {visibleAll ? (
        <ListAllVideos
          videoIds={videoIds}
          favoritesVideos={favoritesVideos}
          clickHeart={clickHeart}
        />
      ) : visibleFav ? (
        <ListFavorites
          videoIds={videoIds}
          favoritesVideos={favoritesVideos}
          favVideos={favVideos}
          clickHeart={clickHeart}
        />
      ) : (
        <ListDefault
          defaultVideo={defaultVideo}
          listDefault={listDefault}
          videoIds={videoIds}
          favoritesVideos={favoritesVideos}
          clickHeart={clickHeart}
        />
      )}
    </div>
  );
};

export default ListOfVideosSidebar;
// <VideoTag defaultVideo={defaultVideo} />

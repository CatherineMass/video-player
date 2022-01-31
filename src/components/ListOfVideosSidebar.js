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
  clickedVideos,
  favVideos,
}) => {
  return (
    <div className="list-of-videos-sidebar">
      {visibleAll ? (
        <ListAllVideos
          videoIds={videoIds}
          clickedVideos={clickedVideos}
          clickHeart={clickHeart}
        />
      ) : visibleFav ? (
        <ListFavorites
          videoIds={videoIds}
          clickedVideos={clickedVideos}
          favVideos={favVideos}
        />
      ) : (
        <ListDefault
          defaultVideo={defaultVideo}
          videoIds={videoIds}
          clickedVideos={clickedVideos}
        />
      )}
    </div>
  );
};

export default ListOfVideosSidebar;
// <VideoTag defaultVideo={defaultVideo} />

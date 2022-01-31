/* eslint-disable react/prop-types */
import React from "react";
import VideoTag from "./VideoTag";

const ListFavorites = ({ clickHeart, clickedVideos, favVideos }) => {

  console.log(favVideos);
  return (
    <div className="list-favorites">
      {favVideos.map(video => (
        <VideoTag
          videoName={video?.id?.name}
          videoId={video?.id?.videoId}
          key={video?.id?.videoId}
          clickHeart={clickHeart}
          clickedVideos={clickedVideos}
        />
      ))}
    </div>
  );
};

export default ListFavorites;

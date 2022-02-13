/* eslint-disable react/prop-types */
import React from "react";
import VideoTag from "./VideoTag";

const ListDefault = ({
  listDefault,
  favoritesVideos,
  clickHeart,
  handleSidebarClick,
}) => {
  // const setOfDefaultIds = [
  //   ...new Set(JSON.stringify(listDefault)),
  // ];

  const objectsMap = new Map();
  listDefault.forEach(video => {
    objectsMap.set(video?.id?.videoId, video?.id?.name);
  });


  const kvArray = [...objectsMap];
  console.log(kvArray);

  kvArray.map(arr => {console.log(arr[0] + ' ' +arr[1])});
 

  return (
    <div className="list-default">
      {kvArray.length !== 0 && kvArray.map(arr => {
          <VideoTag
            videoName={arr[1]}
            videoId={arr[0]}
            key={arr[0]}
            favoritesVideos={favoritesVideos}
            clickHeart={clickHeart}
            handleSidebarClick={handleSidebarClick}
          />})}
    </div>
  );
};

export default ListDefault;

// {listDefault.length !== 0 &&
//   listDefault.map((video) => (
//     <VideoTag
//       videoName={video?.id?.name}
//       videoId={video?.id?.videoId}
//       key={video?.id?.videoId}
//       favoritesVideos={favoritesVideos}
//       clickHeart={clickHeart}
//       handleSidebarClick={handleSidebarClick}
//     />
//   ))}
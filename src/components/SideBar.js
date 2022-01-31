/* eslint-disable react/prop-types */
import React, { useState } from "react";
import ListOfVideosSidebar from "./ListOfVideosSidebar";
import LinksSidebar from "./LinksSidebar";

const SideBar = ({ videoIds, defaultVideo }) => {
  // Button All
  const [visibleAll, setVisibleAll] = useState(false);
  const onClickAllVideos = () => {
    setVisibleAll(!visibleAll);
    setVisibleFav(false);
  };

  // Button Favorites
  const [visibleFav, setVisibleFav] = useState(false);
  const onClickFav = () => {
    setVisibleFav(!visibleFav);
    setVisibleAll(false);
  };

  // Click heart
  const [clickedVideos, setClickedVideos] = useState([]);
  const [favVideos, setFavVideos] = useState([]);

  const clickHeart = (id) => {
    if (clickedVideos.includes(id)) {
      setClickedVideos(clickedVideos.filter((videoId) => videoId !== id));
    } else {
      setClickedVideos([...clickedVideos, id]);
    }

     // Put favorite videos in an array
     const fav = videoIds.filter(video => video.id.videoId === id);
     setFavVideos([...favVideos, ...fav])
     console.log(favVideos);
  };

  

  

  return (
    <div className="side-bar-container">
      <LinksSidebar
        onClickAllVideos={onClickAllVideos}
        onClickFav={onClickFav}
      />
      <ListOfVideosSidebar
        defaultVideo={defaultVideo}
        videoIds={videoIds}
        visibleAll={visibleAll}
        visibleFav={visibleFav}
        clickHeart={clickHeart}
        clickedVideos={clickedVideos}
        favVideos={favVideos}
      />
    </div>
  );
};

export default SideBar;

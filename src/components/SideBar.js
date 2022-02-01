/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
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
  const [favoritesVideos, setFavoritesVideos] = useState([]);
  const [favVideos, setFavVideos] = useState(() => {
    const localFavorites = localStorage.getItem('favorites');
    return localFavorites ? JSON.parse(localFavorites) : [];
  });

  const clickHeart = (id) => {
    if (favoritesVideos.includes(id)) {
      setFavoritesVideos(favoritesVideos.filter((videoId) => videoId !== id));
    } else {
      setFavoritesVideos([...favoritesVideos, id]);
    }

    // Put favorite videos in an array
    const fav = videoIds.find((video) => video.id.videoId === id);
    if (favVideos.includes(fav)) {
      setFavVideos(favVideos.filter((video) => video !== fav));
    } else {
      setFavVideos([...favVideos, fav]);
    }
  };

  // Store favorite videos in local storage
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favVideos))
  }, [favVideos]);

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
        favoritesVideos={favoritesVideos}
        favVideos={favVideos}
      />
    </div>
  );
};

export default SideBar;

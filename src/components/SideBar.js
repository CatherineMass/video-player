/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import ListOfVideosSidebar from "./ListOfVideosSidebar";
import LinksSidebar from "./LinksSidebar";

const SideBar = ({
  videoIds,
  defaultVideo,
  listDefault,
  handleSidebarClick,
}) => {
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

  // Click heart function
  // Array of ids
  const [favoritesVideos, setFavoritesVideos] = useState(() => {
    const localFavoritesId = localStorage.getItem("favoriteId");
    return localFavoritesId ? JSON.parse(localFavoritesId) : [];
  });
  // Array of objects
  const [favVideos, setFavVideos] = useState(() => {
    const localFavorites = localStorage.getItem("favoriteObj");
    return localFavorites ? JSON.parse(localFavorites) : [];
  });

  const clickHeart = (id) => {
    const fav = videoIds.find((video) => video.id.videoId === id);
    if (favoritesVideos.includes(id)) {
      setFavoritesVideos(favoritesVideos.filter((videoId) => videoId !== id));
    } else {
      setFavoritesVideos([...favoritesVideos, id]);
    }

    // Put favorite videos in an array
    const stringFavVideos = favVideos.map((vid) => JSON.stringify(vid));
    if (stringFavVideos.includes(JSON.stringify(fav))) {
      setFavVideos(
        favVideos.filter(
          (video) => JSON.stringify(video) !== JSON.stringify(fav)
        )
      );
    } else {
      setFavVideos([...favVideos, fav]);
    }
  };

  // Store favorite videos object in local storage
  useEffect(() => {
    localStorage.setItem("favoriteObj", JSON.stringify(favVideos));
  }, [favVideos]);

  // Store favorite videos' ids in local storage
  useEffect(() => {
    localStorage.setItem("favoriteId", JSON.stringify(favoritesVideos));
  }, [favoritesVideos]);

  return (
    <div className="side-bar-container">
      <LinksSidebar
        onClickAllVideos={onClickAllVideos}
        onClickFav={onClickFav}
      />
      <ListOfVideosSidebar
        defaultVideo={defaultVideo}
        listDefault={listDefault}
        videoIds={videoIds}
        visibleAll={visibleAll}
        visibleFav={visibleFav}
        clickHeart={clickHeart}
        favoritesVideos={favoritesVideos}
        favVideos={favVideos}
        handleSidebarClick={handleSidebarClick}
      />
    </div>
  );
};

export default SideBar;

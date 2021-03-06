import React, { useState, useEffect } from 'react';
import ListOfVideosSidebar from './ListOfVideosSidebar';
import LinksSidebar from './LinksSidebar';
import { AppProps } from '../../AppProps';
import { useNavigate } from 'react-router-dom';

interface Props {
  handleSidebarClick: AppProps['stringVoid'];
  defaultList: AppProps['arrayOfVideos'];
  videoIds: AppProps['arrayOfVideos'];
}

const SideBar: React.FC<Props> = ({
  videoIds,
  defaultList,
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
  const navigate = useNavigate();
  const [favVideos, setFavVideos] = useState<AppProps['arrayOfVideos']>([]);
  const username = sessionStorage.getItem('username');
  const token = sessionStorage.getItem('token');

  const getFavorites = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_SERVER}/api/v1/getfavorites`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, token }),
        credentials: 'include',
      });
      const data = await response.json();
      if (response.status === 401) {
        console.error(data);
        navigate('/login');
      }
      setFavVideos(data.data.favorites);
    } catch (err) {
      console.log(err);
    }
  };

  const clickHeart: AppProps['stringVoid'] = async (id) => {
    const favorites = favVideos.map(video => video.id.videoId);

    if (favorites.includes(id)) {
      try {
        const response = await fetch(`${process.env.REACT_APP_SERVER}/api/v1/favorites`, {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username, videoId: id, token }),
          credentials: 'include',
        });
        const data = await response.json();
        if (response.status === 401) {
          console.error(data);
          navigate('/login');
        }
        getFavorites();
      } catch(err) {
        console.log(err);
      }
    } else {
      try {
        const response = await fetch(`${process.env.REACT_APP_SERVER}/api/v1/favorites`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username, videoId: id, token }),
          credentials: 'include',
        });
        const data = await response.json();
        if (response.status === 401) {
          console.error(data);
          navigate('/login');
        }
        getFavorites();
      } catch (err) {
        console.log(err);
      }
    }
  };

  useEffect(() => {
    getFavorites();
  }, []);

  return (
    <div className="side-bar-container">
      <LinksSidebar
        onClickAllVideos={onClickAllVideos}
        onClickFav={onClickFav}
      />
      <ListOfVideosSidebar
        clickHeart={clickHeart}
        handleSidebarClick={handleSidebarClick}
        defaultList={defaultList}
        videoIds={videoIds}
        visibleAll={visibleAll}
        visibleFav={visibleFav}
        favVideos={favVideos}
      />
    </div>
  );
};

export default SideBar;

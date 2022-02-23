"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
/* eslint-disable react/prop-types */
const react_1 = tslib_1.__importStar(require("react"));
const ListOfVideosSidebar_1 = tslib_1.__importDefault(require("./ListOfVideosSidebar"));
const LinksSidebar_1 = tslib_1.__importDefault(require("./LinksSidebar"));
const SideBar = ({ videoIds, defaultVideo, listDefault, handleSidebarClick, }) => {
    // Button All
    const [visibleAll, setVisibleAll] = react_1.useState(false);
    const onClickAllVideos = () => {
        setVisibleAll(!visibleAll);
        setVisibleFav(false);
    };
    // Button Favorites
    const [visibleFav, setVisibleFav] = react_1.useState(false);
    const onClickFav = () => {
        setVisibleFav(!visibleFav);
        setVisibleAll(false);
    };
    // Click heart function
    // Array of ids
    const [favoritesVideos, setFavoritesVideos] = react_1.useState(() => {
        const localFavoritesId = localStorage.getItem('favoriteId');
        return localFavoritesId ? JSON.parse(localFavoritesId) : [];
    });
    // Array of objects
    const [favVideos, setFavVideos] = react_1.useState(() => {
        const localFavorites = localStorage.getItem('favoriteObj');
        return localFavorites ? JSON.parse(localFavorites) : [];
    });
    const clickHeart = (id) => {
        const fav = videoIds.find((video) => video.id.videoId === id);
        if (favoritesVideos.includes(id)) {
            setFavoritesVideos(favoritesVideos.filter((videoId) => videoId !== id));
        }
        else {
            setFavoritesVideos([...favoritesVideos, id]);
        }
        // Put favorite videos in an array
        const stringFavVideos = favVideos.map((vid) => JSON.stringify(vid));
        if (stringFavVideos.includes(JSON.stringify(fav))) {
            setFavVideos(favVideos.filter((video) => JSON.stringify(video) !== JSON.stringify(fav)));
        }
        else {
            setFavVideos([...favVideos, fav]);
        }
    };
    // Store favorite videos object in local storage
    react_1.useEffect(() => {
        localStorage.setItem('favoriteObj', JSON.stringify(favVideos));
    }, [favVideos]);
    // Store favorite videos' ids in local storage
    react_1.useEffect(() => {
        localStorage.setItem('favoriteId', JSON.stringify(favoritesVideos));
    }, [favoritesVideos]);
    return (react_1.default.createElement("div", { className: "side-bar-container" },
        react_1.default.createElement(LinksSidebar_1.default, { onClickAllVideos: onClickAllVideos, onClickFav: onClickFav }),
        react_1.default.createElement(ListOfVideosSidebar_1.default, { clickHeart: clickHeart, handleSidebarClick: handleSidebarClick, defaultVideo: defaultVideo, listDefault: listDefault, videoIds: videoIds, visibleAll: visibleAll, visibleFav: visibleFav, favoritesVideos: favoritesVideos, favVideos: favVideos })));
};
exports.default = SideBar;

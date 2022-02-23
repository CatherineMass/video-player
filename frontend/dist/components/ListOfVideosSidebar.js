"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
/* eslint-disable react/prop-types */
const react_1 = tslib_1.__importDefault(require("react"));
const ListAllVideos_1 = tslib_1.__importDefault(require("./ListAllVideos"));
const ListFavorites_1 = tslib_1.__importDefault(require("./ListFavorites"));
const ListDefault_1 = tslib_1.__importDefault(require("./ListDefault"));
const ListOfVideosSidebar = ({ defaultVideo, videoIds, visibleAll, visibleFav, clickHeart, favoritesVideos, favVideos, listDefault, handleSidebarClick, }) => {
    console.log(videoIds);
    return (react_1.default.createElement("div", { className: "list-of-videos-sidebar" }, visibleAll ? (react_1.default.createElement(ListAllVideos_1.default, { videoIds: videoIds, favoritesVideos: favoritesVideos, clickHeart: clickHeart, handleSidebarClick: handleSidebarClick })) : visibleFav ? (react_1.default.createElement(ListFavorites_1.default, { favoritesVideos: favoritesVideos, favVideos: favVideos, clickHeart: clickHeart, handleSidebarClick: handleSidebarClick })) : (react_1.default.createElement(ListDefault_1.default, { defaultVideo: defaultVideo, listDefault: listDefault, videoIds: videoIds, favoritesVideos: favoritesVideos, clickHeart: clickHeart, handleSidebarClick: handleSidebarClick }))));
};
exports.default = ListOfVideosSidebar;

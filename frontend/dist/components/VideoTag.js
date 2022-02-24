"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const fa_1 = require("react-icons/fa");
const BtnVideoName_1 = tslib_1.__importDefault(require("./BtnVideoName"));
const VideoTag = ({ videoName, videoId, favoritesVideos, clickHeart, handleSidebarClick, }) => {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(BtnVideoName_1.default, { videoName: videoName, videoId: videoId, handleSidebarClick: handleSidebarClick }),
        react_1.default.createElement("button", { className: "btn-heart", type: "button", alt: "heart-favorite", id: videoId, onClick: () => clickHeart(videoId) }, favoritesVideos.includes(videoId) ? (react_1.default.createElement(fa_1.FaHeart, { color: "red" })) : (react_1.default.createElement(fa_1.FaHeart, { color: "grey" })))));
};
exports.default = VideoTag;

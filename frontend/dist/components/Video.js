"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const Video = ({ currentVideo, sendVideoToSidebar }) => {
    var _a;
    const youtubeVideoId = (_a = currentVideo === null || currentVideo === void 0 ? void 0 : currentVideo.id) === null || _a === void 0 ? void 0 : _a.videoId;
    return (react_1.default.createElement("iframe", { className: "video", onLoad: sendVideoToSidebar, width: "500", height: "300", src: `https://www.youtube-nocookie.com/embed/${youtubeVideoId}`, title: "YouTube video player", frameBorder: "0", allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", allowFullScreen: true }));
};
exports.default = Video;

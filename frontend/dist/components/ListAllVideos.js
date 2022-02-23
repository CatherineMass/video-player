"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
/* eslint-disable react/prop-types */
const react_1 = tslib_1.__importDefault(require("react"));
const VideoTag_1 = tslib_1.__importDefault(require("./VideoTag"));
// type Props = {
// }
const ListAllVideos = ({ videoIds, favoritesVideos, clickHeart, handleSidebarClick, }) => {
    return (react_1.default.createElement("div", { className: "list-all-videos" }, videoIds.map((video) => {
        var _a, _b, _c;
        return (react_1.default.createElement(VideoTag_1.default, { videoName: (_a = video === null || video === void 0 ? void 0 : video.id) === null || _a === void 0 ? void 0 : _a.name, videoId: (_b = video === null || video === void 0 ? void 0 : video.id) === null || _b === void 0 ? void 0 : _b.videoId, key: (_c = video === null || video === void 0 ? void 0 : video.id) === null || _c === void 0 ? void 0 : _c.videoId, clickHeart: clickHeart, favoritesVideos: favoritesVideos, handleSidebarClick: handleSidebarClick }));
    })));
};
exports.default = ListAllVideos;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const BtnVideoName = ({ videoName, videoId, handleSidebarClick }) => {
    return (react_1.default.createElement("button", { className: "btn-video-name", type: "button", onClick: () => handleSidebarClick(videoId) },
        videoName,
        " #",
        videoId));
};
exports.default = BtnVideoName;

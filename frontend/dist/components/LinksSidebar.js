"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const BtnAllVideos_1 = tslib_1.__importDefault(require("./BtnAllVideos"));
const BtnFavorites_1 = tslib_1.__importDefault(require("./BtnFavorites"));
const LinksSidebar = ({ onClickAllVideos, onClickFav }) => {
    return (react_1.default.createElement("div", { className: "sidebar-links" },
        react_1.default.createElement(BtnFavorites_1.default, { onClickFav: onClickFav }),
        react_1.default.createElement(BtnAllVideos_1.default, { onClickAllVideos: onClickAllVideos })));
};
exports.default = LinksSidebar;

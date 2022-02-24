"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const SearchBar_1 = tslib_1.__importDefault(require("./SearchBar"));
const Video_1 = tslib_1.__importDefault(require("./Video"));
const BtnGroup_1 = tslib_1.__importDefault(require("./BtnGroup"));
const logo_svg_1 = tslib_1.__importDefault(require("../logo.svg"));
const MainContainer = ({ handleFilter, filteredList, handleSearch, currentVideo, nextClick, prevClick, sendVideoToSidebar, }) => {
    return (react_1.default.createElement("div", { className: "main-container" },
        react_1.default.createElement("img", { src: logo_svg_1.default, alt: "logo", className: "logo" }),
        react_1.default.createElement(SearchBar_1.default, { handleFilter: handleFilter, filteredList: filteredList, handleSearch: handleSearch }),
        react_1.default.createElement("div", { className: "video-and-btn-container" },
            react_1.default.createElement(Video_1.default, { currentVideo: currentVideo, sendVideoToSidebar: sendVideoToSidebar }),
            react_1.default.createElement(BtnGroup_1.default, { onNextClick: nextClick, onPrevClick: prevClick }))));
};
exports.default = MainContainer;

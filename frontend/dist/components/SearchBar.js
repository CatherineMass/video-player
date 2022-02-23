"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
/* eslint-disable react/prop-types */
const react_1 = tslib_1.__importDefault(require("react"));
const bi_1 = require("react-icons/bi");
const SearchBar = ({ handleFilter, filteredList, handleSearch, placeholder, }) => {
    return (react_1.default.createElement("div", { className: "search-bar" },
        react_1.default.createElement("div", { className: "search-bar__input" },
            react_1.default.createElement("input", { type: "text", className: "search-bar__input-field", placeholder: placeholder, "aria-label": "Search a video", onChange: handleFilter }),
            react_1.default.createElement("button", { className: "search-button", type: "button", title: 'search-button' },
                react_1.default.createElement(bi_1.BiSearchAlt, null))),
        filteredList.length !== 0 && (react_1.default.createElement("div", { className: "drop-down__list" }, filteredList.slice(0, 5).map((video) => {
            var _a, _b;
            return (react_1.default.createElement("button", { key: (_a = video === null || video === void 0 ? void 0 : video.id) === null || _a === void 0 ? void 0 : _a.videoId, className: "drop-down__btn-video", onClick: () => handleSearch(video.id.videoId, video) }, (_b = video === null || video === void 0 ? void 0 : video.id) === null || _b === void 0 ? void 0 : _b.name));
        })))));
};
exports.default = SearchBar;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
/* eslint-disable react/prop-types */
const react_1 = tslib_1.__importDefault(require("react"));
const BtnAllVideos = ({ onClickAllVideos }) => {
    return (react_1.default.createElement("button", { className: "btn-all-videos", type: "button", onClick: onClickAllVideos }, "All Videos"));
};
exports.default = BtnAllVideos;

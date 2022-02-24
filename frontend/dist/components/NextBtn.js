"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const NextBtn = ({ onNextClick }) => {
    return (react_1.default.createElement("button", { onClick: onNextClick, className: "next-btn" }, "Next"));
};
exports.default = NextBtn;

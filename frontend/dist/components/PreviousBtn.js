"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const PreviousBtn = ({ onPrevClick }) => {
    return (react_1.default.createElement("button", { onClick: onPrevClick, className: "previous-btn" }, "Previous"));
};
exports.default = PreviousBtn;

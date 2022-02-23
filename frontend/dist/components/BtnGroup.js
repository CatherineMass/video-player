"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
/* eslint-disable react/prop-types */
const react_1 = tslib_1.__importDefault(require("react"));
const PreviousBtn_1 = tslib_1.__importDefault(require("./PreviousBtn"));
const NextBtn_1 = tslib_1.__importDefault(require("./NextBtn"));
const BtnGroup = ({ onNextClick, onPrevClick }) => {
    return (react_1.default.createElement("div", { className: "btn-group" },
        react_1.default.createElement(PreviousBtn_1.default, { onPrevClick: onPrevClick }),
        react_1.default.createElement(NextBtn_1.default, { onNextClick: onNextClick })));
};
exports.default = BtnGroup;

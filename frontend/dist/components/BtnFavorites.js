"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const BtnFavorites = ({ onClickFav }) => {
    return (react_1.default.createElement("button", { className: "btn-favorites", type: "button", onClick: onClickFav }, "My Favorites"));
};
exports.default = BtnFavorites;

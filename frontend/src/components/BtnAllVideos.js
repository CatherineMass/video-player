/* eslint-disable react/prop-types */
import React from "react";

const BtnAllVideos = ({ onClickAllVideos }) => {
  return (
    <button
      className="btn-all-videos"
      type="button"
      onClick={onClickAllVideos}
    >
      All Videos
    </button>
  );
};

export default BtnAllVideos;

/* eslint-disable react/prop-types */
import React from "react";

const BtnVideoName = ({ videoName, videoId, handleSidebarClick }) => {
  return (
    <button
      className="btn-video-name"
      type="button"
      onClick={() => handleSidebarClick(videoId)}
    >
      {videoName} #{videoId}
    </button>
  );
};

export default BtnVideoName;

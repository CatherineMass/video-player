/* eslint-disable react/prop-types */
import React from "react";


const BtnVideoName = ({ videoName, videoId }) => {


  return (
    <button className="btn-video-name" type="button">
      {videoName} #{videoId}
    </button>
  );
};

export default BtnVideoName;

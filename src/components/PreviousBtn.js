/* eslint-disable react/prop-types */
import React from "react";

const PreviousBtn = ({ onPrevClick }) => {
  return (
    <button onClick={onPrevClick} className="previous-btn">
      Previous
    </button>
  );
};

export default PreviousBtn;

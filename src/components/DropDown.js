/* eslint-disable react/prop-types */
import React from "react";

const DropDown = ({ options }) => {
  return (
    <div className="drop-down__list">
      {options.map((option) => 
        <button key={option.id} className="drop-down__btn-video">
          {option.name}
        </button>
      )}
    </div>
  );
};

export default DropDown;

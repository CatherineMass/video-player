/* eslint-disable react/prop-types */
import React, { MouseEventHandler } from 'react';

type Props = {
  onPrevClick: MouseEventHandler;
}

const PreviousBtn = ({ onPrevClick }: Props) => {
	return (
		<button onClick={onPrevClick} className="previous-btn">
      Previous
		</button>
	);
};

export default PreviousBtn;

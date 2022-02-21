/* eslint-disable react/prop-types */
import React, { MouseEventHandler } from 'react';

type Props = {
  onNextClick: MouseEventHandler;
}

const NextBtn = ({ onNextClick }: Props) => {
	return (
		<button onClick={onNextClick} className="next-btn">
      Next
		</button>
	);
};

export default NextBtn;

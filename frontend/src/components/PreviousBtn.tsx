/* eslint-disable react/prop-types */
import React from 'react';
import { AppProps } from '../AppProps';

interface Props {
  onPrevClick: AppProps['previousClick'];
}

const PreviousBtn:React.FC<Props> = ({ onPrevClick }) => {
	return (
		<button onClick={onPrevClick} className="previous-btn">
      Previous
		</button>
	);
};

export default PreviousBtn;

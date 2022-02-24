import React from 'react';
import PreviousBtn from './PreviousBtn';
import NextBtn from './NextBtn';
import { AppProps } from '../AppProps';

interface Props {
	onNextClick: AppProps['nextClick'];
	onPrevClick: AppProps['previousClick'];
}

const BtnGroup: React.FC<Props> = ({ onNextClick, onPrevClick }) => {
	return (
		<div className="btn-group">
			<PreviousBtn onPrevClick={onPrevClick} />
			<NextBtn onNextClick={onNextClick} />
		</div>
	);
};

export default BtnGroup;

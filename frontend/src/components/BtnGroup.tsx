import React from 'react';
import PreviousBtn from './PreviousBtn';
import NextBtn from './NextBtn';
import { AppProps } from '../AppProps';

interface Props {
	onNextClick: AppProps['noParamVoid'];
	onPrevClick: AppProps['noParamVoid'];
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

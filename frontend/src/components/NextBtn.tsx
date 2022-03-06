import React from 'react';
import { AppProps } from '../AppProps';

interface Props {
  onNextClick: AppProps['noParamVoid'];
}

const NextBtn: React.FC<Props> = ({ onNextClick }) => {
    return (
        <button onClick={onNextClick} className="next-btn">
      Next
        </button>
    );
};

export default NextBtn;

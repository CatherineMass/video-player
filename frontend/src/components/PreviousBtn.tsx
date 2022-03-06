import React from 'react';
import { AppProps } from '../AppProps';

interface Props {
  onPrevClick: AppProps['noParamVoid'];
}

const PreviousBtn:React.FC<Props> = ({ onPrevClick }) => {
    return (
        <button onClick={onPrevClick} className="previous-btn">
      Previous
        </button>
    );
};

export default PreviousBtn;

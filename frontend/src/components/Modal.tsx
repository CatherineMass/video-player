import React from 'react';
import { AppProps } from '../AppProps';

interface Props {
  handleModalOff: AppProps['noParamVoid'];
}

const Modal: React.FC<Props> = ({ handleModalOff }) => {
  return (
    <div className='modal'>
      <div className="modal-content">
        <button onClick={handleModalOff}>
          <span className='close'>&times;</span>
        </button>
        <p>Vaccin</p>
      </div>
    </div>
  );
};

export default Modal;
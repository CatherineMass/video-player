import React from 'react';
import Map from '../components/Map';
import { AppProps } from '../AppProps';


interface Props {
  handleModalOff: AppProps['noParamVoid'];
}

const Modal: React.FC<Props> = ({ handleModalOff }) => {
  return (
    <div className='modal'>
      <div className="modal-header">
        Find a vaccine shot facility near you
        <button onClick={handleModalOff}>
          <span className='close'>&times;</span>
        </button>
      </div>
      <div className="modal-content">
        <div className="map">
          <Map />
        </div>
        <div className="modal-form">
          Form
        </div>
      </div>
    </div>
  );
};

export default Modal;
import React from 'react';
import Map from './Map';
import { AppProps } from '../../AppProps';
import Form from './Form';


interface Props {
  handleModalOff: AppProps['noParamVoid'];
}

const Modal: React.FC<Props> = ({ handleModalOff }) => {
  return (
    <div className='modal'>
      <div className="modal-header">
        <h1>Find a vaccine shot facility near you</h1>
        <button onClick={handleModalOff}>
          <span className='close'>&times;</span>
        </button>
      </div>
      <div className="modal-content">
        <div className="map">
          <Map />
        </div>
        <div className="modal-form-container">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Modal;
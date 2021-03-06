import React, { useEffect, useState } from 'react';
import Map from './Map';
import { AppProps } from '../../AppProps';
import Form from './Form';
import { useNavigate } from 'react-router-dom';


interface Props {
  handleModalOff: AppProps['noParamVoid'];
}

const Modal: React.FC<Props> = ({ handleModalOff }) => {
  const navigate = useNavigate();
  const username = sessionStorage.getItem('username');
  const token = sessionStorage.getItem('token');

  const [facilities, setFacilities] = useState<AppProps['facilities']>([]); 

  // Get facilities
  const getFacilities = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_SERVER}/api/v1/vaccine`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, token }),
        credentials: 'include',
      }
      );
      const data = await response.json();

      if (response.status === 401) {
        console.error(data);
        navigate('/login');
      }

      setFacilities(data.data.facilities);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getFacilities();
  }, []);

  // Get right day and time based on user's selection
  const handleDay: AppProps['stringVoid'] = async (facName) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_SERVER}/api/v1/days`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify({ username, facility: facName }),
        credentials: 'include',
      }
      );
      const data = await response.json();
      console.log(data);

      if (response.status === 401) {
        console.error(data);
        navigate('/login');
      }
    } catch (err) {
      console.log(err);
    }
  };

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
          <Map facilities={facilities} />
        </div>
        <div className="modal-form-container">
          <Form handleModalOff={handleModalOff} facilities={facilities} handleDay={handleDay} />
        </div>
      </div>
    </div>
  );
};

export default Modal;
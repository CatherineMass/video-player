import { Icon } from 'leaflet';
import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import LocationMarker from './LocationMarker';
import vaccineMarker from './marker-vaccine.svg';

const Map = () => {
  const vaccine = new Icon({
    iconUrl: vaccineMarker,
    iconSize: [30, 35]
  });
  
  const position: [number, number] = [59.334, 18.063];
  return (
    <MapContainer className='map' center={position} zoom={10} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url={'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'}
      />
      <Marker position={position} icon={vaccine}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      <LocationMarker />
    </MapContainer>
  );
};

export default Map;

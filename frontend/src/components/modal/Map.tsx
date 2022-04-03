import { Icon, LatLngTuple } from 'leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { AppProps } from '../../AppProps';
import LocationMarker from './LocationMarker';
import vaccineMarker from './marker-vaccine.svg';

interface Props {
  facilities: AppProps['facilities'];
}

const Map: React.FC<Props> = ({ facilities }) => {
  const vaccine = new Icon({
    iconUrl: vaccineMarker,
    iconSize: [30, 35]
  });
  
  const centerPosition: [number, number] = [59.334, 18.063];

  return (
    <MapContainer className='map' center={centerPosition} zoom={10} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url={'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'}
      />
      <MarkerClusterGroup>
        {
          facilities.map(facility => {
            const position: LatLngTuple = [Number(facility.lat), Number(facility.lng)];
            const href = `http://${facility.website}`;
            return (
              <Marker key={Number(facility.phone)} position={position} icon={vaccine}>
                <Popup>
                  <h1>{facility.name}</h1> <br />
                  <a href={href} target='_blank' rel="noreferrer">{facility.website}</a> <br />
                  <p>{facility.phone}</p>
                </Popup>
              </Marker>);
          })
        }
      </MarkerClusterGroup>
      <LocationMarker />
    </MapContainer>
  );
};

export default Map;

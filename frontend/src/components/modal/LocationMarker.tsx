import React, { useEffect, useState } from 'react';
import { Marker, Popup, useMap } from 'react-leaflet';
import { Icon, LatLng } from 'leaflet';
import homeMarker from './marker-home.svg';


const LocationMarker = () => {
  const [position, setPosition] = useState<LatLng | null>(null);

  const map = useMap();

  useEffect(() => {
    map.locate().on('locationfound', (e) => {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    });
  }, [map]);

  const home = new Icon({
    iconUrl: homeMarker,
    iconSize: [30, 35]
  });

  return position === null ? null : (
    <Marker position={position} icon={home}>
      <Popup>You are here</Popup>
    </Marker>
  );
};

export default LocationMarker;
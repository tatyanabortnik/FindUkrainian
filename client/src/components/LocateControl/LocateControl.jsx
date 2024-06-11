import 'leaflet.locatecontrol'; // Import plugin
import 'leaflet.locatecontrol/dist/L.Control.Locate.min.css'; // Import styles
import L from 'leaflet'; // Import L from leaflet to start using the plugin

import { useEffect } from 'react';
import { useMap } from 'react-leaflet';

const LocateControl = () => {
  const map = useMap();

  // console.log('LocateControl component is rendering');

  useEffect(() => {
    // console.log('LocateControl component mounted');
    const location = L.control.locate().addTo(map);

    return () => {
      map.removeControl(location);
      // console.log('LocateControl component UNmounted');
    };
  }, [map]);

  return;
};

export default LocateControl;

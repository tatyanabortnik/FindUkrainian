import 'leaflet.locatecontrol'; // Import plugin
import 'leaflet.locatecontrol/dist/L.Control.Locate.min.css'; // Import styles
import L from 'leaflet'; // Import L from leaflet to start using the plugin

import { useEffect } from 'react';
import { useMap } from 'react-leaflet';

const LocateControl = () => {
  const map = useMap();

  useEffect(() => {
    const location = L.control.locate().addTo(map);

    return () => {
      map.removeControl(location);
    };
  }, [map]);

  return null;
};

export default LocateControl;

import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './style.css';
import LocationMarker from '../LocationMarker/LocationMarker';
import { useContext, useEffect } from 'react';
import BusinessContext from '../../context/BusinessContext';
import { Icon } from 'leaflet';
import place from '../../assets/place.png';
import LocateControl from '../LocateControl/LocateControl';

export default function Map() {
  const { businesses, filteredBusinesses } = useContext(BusinessContext);

  console.log('Map component is rendering');

  const customIcon = new Icon({
    iconUrl: place,
    iconSize: [38, 38],
  });

  const cologneBounds = [
    [50.83, 6.827], // Southwest coordinates
    [51.04, 7.085], // Northeast coordinates
  ];

  useEffect(() => {
    console.log('Map component mounted');
    return () => {
      console.log('Map component unmounted');
    };
  }, []);

  return (
    <MapContainer
      center={[50.94122163874258, 6.9585201430740256]}
      zoom={13}
      scrollWheelZoom={true}
      maxBounds={cologneBounds}
      maxBoundsViscosity={1.0} // Prevent panning outside the bounds
    >
      <TileLayer
        attribution="&copy; Google Maps"
        url="https://www.google.com/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}"
      />

      {filteredBusinesses.map((b) => (
        <Marker
          key={b._id}
          position={[b.coordinates.lat, b.coordinates.lng]}
          icon={customIcon}
        >
          <Popup>
            <img src={b.images[0]} alt={b.name} />
          </Popup>
        </Marker>
      ))}

      <LocateControl />
    </MapContainer>
  );
}

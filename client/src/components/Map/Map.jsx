import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './style.css';
import LocationMarker from '../LocationMarker/LocationMarker';
import { useContext } from 'react';
import BusinessContext from '../../context/BusinessContext';
import { Icon } from 'leaflet';
import place from '../../assets/place.png';

export default function Map() {
  const { businesses } = useContext(BusinessContext);

  const customIcon = new Icon({
    iconUrl: place,
    iconSize: [38, 38],
  });
  return (
    <MapContainer
      center={[50.94122163874258, 6.9585201430740256]}
      zoom={13}
      scrollWheelZoom={false}
    >
      {/* <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        /> */}
      <TileLayer
        attribution="&copy; Google Maps"
        url="https://www.google.com/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}"
      />
      {/* <Marker position={[50.94122163874258, 6.9585201430740256]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker> */}
      {businesses.map((b) => {
        return (
          <Marker
            key={b._id}
            position={[b.coordinates.lat, b.coordinates.lng]}
            icon={customIcon}
          >
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        );
      })}
      <LocationMarker />
    </MapContainer>
  );
}

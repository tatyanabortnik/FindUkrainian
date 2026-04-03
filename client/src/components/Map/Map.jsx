import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import './style.css'
import { useContext, useEffect, useRef } from 'react'
import BusinessContext from '../../context/BusinessContext'
import { Icon } from 'leaflet'
import LocateControl from '../LocateControl/LocateControl'
import isOpenNow from '../../utils/isOpen'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import PhoneIcon from '@mui/icons-material/Phone'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

export default function Map() {
  const { filteredBusinesses, businessId } = useContext(BusinessContext)

  const markerRefs = useRef({}) //store refs to markers in DOM here, to open their popups programmatically

  useEffect(() => {
    businessId && markerRefs.current[businessId]?.openPopup()
  }, [businessId]) //open a popup of a corresponding marker when a businessId from BusinessList component updates

  const customIcon = new Icon({
    iconUrl:
      'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-gold.png',
    shadowUrl:
      'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  })

  const cologneBounds = [
    [50.83, 6.827], // Southwest coordinates
    [51.04, 7.085], // Northeast coordinates
  ]

  return (
    <MapContainer
      center={[50.94122163874258, 6.9585201430740256]}
      zoom={13}
      scrollWheelZoom={true}
      maxBounds={cologneBounds}
      maxBoundsViscosity={1.0} // Prevent panning outside the bounds
    >
      <TileLayer
        attribution='&copy; Google Maps'
        url='https://www.google.com/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}'
      />

      {filteredBusinesses.map((b) => {
        const isOpen = isOpenNow(b.openingHours)
        return (
          <Marker
            key={b._id}
            position={[b.coordinates.lat, b.coordinates.lng]}
            icon={customIcon}
            ref={(markerDomEL) => (markerRefs.current[b._id] = markerDomEL)}
          >
            <Popup className='popup'>
              <div className='popup-card'>
                {/* Hero image with overlay */}
                <div className='popup-card__hero'>
                  <img
                    className='popup-card__img'
                    src={b.images[0]}
                    alt={b.name}
                  />
                  <div className='popup-card__hero-overlay' />
                  <span
                    className={`popup-card__status ${isOpen ? 'popup-card__status--open' : 'popup-card__status--closed'}`}
                  >
                    <span className='popup-card__status-dot' />
                    {isOpen ? 'Open' : 'Closed'}
                  </span>
                  <span className='popup-card__category'>{b.category}</span>
                </div>

                {/* Content */}
                <div className='popup-card__body'>
                  <h4 className='popup-card__name'>{b.name}</h4>

                  <div className='popup-card__info'>
                    {b.address && (
                      <div className='popup-card__info-row'>
                        <LocationOnIcon
                          sx={{ fontSize: 14, color: 'var(--text-tertiary)' }}
                        />
                        <span>{b.address}</span>
                      </div>
                    )}
                    {b.contactInfo && (
                      <div className='popup-card__info-row'>
                        <PhoneIcon
                          sx={{ fontSize: 14, color: 'var(--text-tertiary)' }}
                        />
                        <span>{b.contactInfo}</span>
                      </div>
                    )}
                  </div>

                  <Button
                    className='popup-card__btn'
                    component={Link}
                    to={'/id/' + b._id}
                    variant='contained'
                    endIcon={<ArrowOutwardIcon sx={{ fontSize: '14px !important' }} />}
                  >
                    View details
                  </Button>
                </div>
              </div>
            </Popup>
          </Marker>
        )
      })}
      <LocateControl />
    </MapContainer>
  )
}

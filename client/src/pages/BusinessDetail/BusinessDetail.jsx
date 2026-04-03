import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import LanguageIcon from '@mui/icons-material/Language'
import PhoneIcon from '@mui/icons-material/Phone'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import { Avatar, Rating } from '@mui/material'
import { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import BusinessContext from '../../context/BusinessContext'
import './style.css'
import getAmPm from '../../utils/getAmPm'

export default function BusinessDetail() {
  const { id } = useParams()
  const { businesses } = useContext(BusinessContext)

  const business = businesses.find((el) => el._id === id)

  return (
    <div className='bd-page'>
      <Link to='/' className='bd-back'>
        <ArrowBackIcon sx={{ fontSize: 18 }} />
        <span>Back</span>
      </Link>

      {business && (
        <>
          {/* Hero */}
          <div className='bd-hero'>
            <img
              className='bd-hero__img'
              src={business.images[0]}
              alt={business.name}
            />
            <div className='bd-hero__overlay' />
            <div className='bd-hero__content'>
              {business.category && (
                <span className='bd-hero__category'>{business.category}</span>
              )}
              <h1 className='bd-hero__title'>{business.name}</h1>
              {business.address && (
                <p className='bd-hero__address'>
                  <LocationOnIcon sx={{ fontSize: 16, opacity: 0.8 }} />
                  {business.address}
                </p>
              )}
            </div>
          </div>

          {/* Quick actions */}
          <div className='bd-actions'>
            {business.website && (
              <a
                href={business.website}
                target='_blank'
                rel='noopener noreferrer'
                className='bd-action-pill'
              >
                <LanguageIcon sx={{ fontSize: 18 }} />
                <span>Website</span>
              </a>
            )}
            {business.contactInfo && (
              <a href={`tel:${business.contactInfo}`} className='bd-action-pill'>
                <PhoneIcon sx={{ fontSize: 18 }} />
                <span>{business.contactInfo}</span>
              </a>
            )}
          </div>

          {/* About */}
          <section className='bd-section bd-about'>
            <h2 className='bd-section__heading'>About</h2>
            <p className='bd-about__text'>{business.longDescription}</p>
          </section>

          {/* Hours */}
          <section className='bd-section bd-hours'>
            <h2 className='bd-section__heading'>
              <AccessTimeIcon sx={{ fontSize: 20, opacity: 0.5 }} />
              Hours
            </h2>
            <div className='bd-hours__grid'>
              {Object.keys(business.openingHours).map((key) => (
                <div key={key} className='bd-hours__row'>
                  <span className='bd-hours__day'>{key}</span>
                  <span className='bd-hours__separator' />
                  <span className='bd-hours__time'>
                    {getAmPm(business.openingHours[key].open)} –{' '}
                    {getAmPm(business.openingHours[key].close)}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Reviews */}
          <section className='bd-section bd-reviews'>
            <h2 className='bd-section__heading'>Reviews</h2>

            <div className='bd-review-card'>
              <div className='bd-review__header'>
                <Avatar
                  sx={{
                    width: 36,
                    height: 36,
                    fontSize: 14,
                    bgcolor: '#0057b7',
                  }}
                >
                  RT
                </Avatar>
                <div className='bd-review__meta'>
                  <span className='bd-review__name'>Regina Tan</span>
                  <span className='bd-review__date'>1 minute ago</span>
                </div>
                <Rating
                  size='small'
                  value={4}
                  readOnly
                  sx={{ ml: 'auto' }}
                />
              </div>
              <p className='bd-review__body'>
                Never fails to impress! The service here is top-notch, with
                friendly staff always ready to assist you. Whether you're looking
                for a specific item or need help navigating the aisles, they're
                knowledgeable and eager to help. Plus, the checkout process is
                efficient, making for a seamless shopping experience. Highly
                recommended!
              </p>
            </div>

            <div className='bd-review-card'>
              <div className='bd-review__header'>
                <Avatar
                  sx={{
                    width: 36,
                    height: 36,
                    fontSize: 14,
                    bgcolor: '#0057b7',
                  }}
                >
                  MM
                </Avatar>
                <div className='bd-review__meta'>
                  <span className='bd-review__name'>Michel Michel</span>
                  <span className='bd-review__date'>1 minute ago</span>
                </div>
                <Rating
                  size='small'
                  value={5}
                  readOnly
                  sx={{ ml: 'auto' }}
                />
              </div>
              <p className='bd-review__body'>
                Love shopping here! The service is exceptional – from the moment
                you walk in, you're greeted with smiles and helpful attitudes.
                The staff goes above and beyond to ensure you find everything you
                need, and they're quick to address any questions or concerns.
                Plus, the cleanliness and organization of the store make for a
                pleasant and stress-free shopping trip.
              </p>
            </div>
          </section>
        </>
      )}
    </div>
  )
}

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Avatar, Button, Grid, Rating } from '@mui/material';
import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import BusinessContext from '../../context/BusinessContext';
import './style.css';
import getAmPm from '../../utils/getAmPm';

export default function BusinessDetail() {
  const { id } = useParams();
  const { businesses } = useContext(BusinessContext);

  const business = businesses.find((el) => el._id === id);
  // console.log(business);

  return (
    <>
      <Button
        className="detail-btn"
        component={Link}
        to={'/'}
        variant="contained"
        startIcon={<ArrowBackIcon />}
      >
        Back to map
      </Button>

      {business && (
        <div className="business-detail">
          <div className="business-detail__img">
            <img src={business.images[0]} alt={business.name} />
            <h2 className="business-detail__title">{business.name}</h2>
          </div>

          <div className="business-detail__desc">
            <p>{business.longDescription}</p>
          </div>

          <div className="business-hours">
            <h2 className="business-hours__title">Business hours</h2>

            <div className="business-hours__container">
              {Object.keys(business.openingHours).map((key, i) => (
                <div key={i} className="business-hours__item">
                  <p className="item__day-name">{key}</p>
                  <p>
                    {getAmPm(business.openingHours[key].open)} -
                    {getAmPm(business.openingHours[key].close)}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="business-detail__reviews">
            <h2 className="reviews__title">Reviews</h2>

            <div className="reviews__review">
              <Grid container wrap="nowrap" spacing={2}>
                <Grid item>
                  <Avatar alt="avatar">RT</Avatar>
                </Grid>
                <Grid justifyContent="left" item xs zeroMinWidth>
                  <Rating
                    className="rating"
                    name="read-only"
                    value={4}
                    readOnly
                  />
                  <h4 style={{ margin: 0, textAlign: 'left' }}>Regina Tan</h4>
                  <p style={{ textAlign: 'left' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenean luctus ut est sed faucibus. Duis bibendum ac ex
                    vehicula laoreet. Suspendisse congue vulputate lobortis.
                    Pellentesque at interdum.{' '}
                  </p>
                  <p style={{ textAlign: 'left', color: 'gray' }}>
                    posted 1 minute ago
                  </p>
                </Grid>
              </Grid>
            </div>
            <div className="reviews__review">
              <Grid container wrap="nowrap" spacing={2}>
                <Grid item>
                  <Avatar alt="avatar">MM</Avatar>
                </Grid>
                <Grid justifyContent="left" item xs zeroMinWidth>
                  <Rating
                    className="rating"
                    name="read-only"
                    value={5}
                    readOnly
                  />
                  <h4 style={{ margin: 0, textAlign: 'left' }}>
                    Michel Michel
                  </h4>
                  <p style={{ textAlign: 'left' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenean luctus ut est sed faucibus. Duis bibendum ac ex
                    vehicula laoreet. Suspendisse congue vulputate lobortis.
                    Pellentesque at interdum.{' '}
                  </p>
                  <p style={{ textAlign: 'left', color: 'gray' }}>
                    posted 1 minute ago
                  </p>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

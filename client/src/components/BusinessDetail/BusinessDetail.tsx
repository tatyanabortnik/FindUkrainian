import { Avatar, Grid, Rating } from "@mui/material";
import { useBusinessContext } from "../../context/BusinessContext.tsx";
import { BusinessType } from "../../Types/BusinessType.ts";
import getAmPm from "../../utils/getAmPm.ts";


interface businessProp {
  business: BusinessType
}

const BusinessDetail = ({ business }: businessProp) => {
  const businessContext = useBusinessContext();
  if (!businessContext) return null;

  return (
    <>
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

          {/* FIXME: Create a dynamic comments component, service and add to DB scheme*/}
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
                  <h4 style={{ margin: 0, textAlign: "left" }}>Regina Tan</h4>
                  <p style={{ textAlign: "left" }}>
                    Never fails to impress! The service here is top-notch, with
                    friendly staff always ready to assist you. Whether you're
                    looking for a specific item or need help navigating the
                    aisles, they're knowledgeable and eager to help. Plus, the
                    checkout process is efficient, making for a seamless
                    shopping experience. Highly recommended!{" "}
                  </p>
                  <p style={{ textAlign: "left", color: "gray" }}>
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
                  <h4 style={{ margin: 0, textAlign: "left" }}>
                    Michel Michel
                  </h4>
                  <p style={{ textAlign: "left" }}>
                    Love shopping here! The service is exceptional – from the
                    moment you walk in, you're greeted with smiles and helpful
                    attitudes. The staff goes above and beyond to ensure you
                    find everything you need, and they're quick to address any
                    questions or concerns. Plus, the cleanliness and
                    organization of the store make for a pleasant and
                    stress-free shopping trip.{" "}
                  </p>
                  <p style={{ textAlign: "left", color: "gray" }}>
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
};

export default BusinessDetail;

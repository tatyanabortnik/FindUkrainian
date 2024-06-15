import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Button } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import { useBusinessContext } from "../../context/BusinessContext";
import BusinessDetail from "../../components/BusinessDetail/BusinessDetail";
import "./style.css";


export default function BusinessDetailPage() {
  const businessContext = useBusinessContext();
  if (!businessContext) return null;

  const { id } = useParams();
  if (!id) return undefined;
  const { businesses } = businessContext;

  //FIXME: review and verify - getBusinessByID
  const business = businesses.find((el) => el._id === id);
  if (!business) return null;

  return (
    <>
      <Button
        className="detail-btn"
        component={Link}
        to={"/"}
        variant="contained"
        startIcon={<ArrowBackIcon />}
      >
        Back to map
      </Button>

      <BusinessDetail business={business} />
    </>
  );
}

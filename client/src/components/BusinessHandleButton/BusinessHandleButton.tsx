/* eslint-disable react/prop-types */
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import {
  useBusinessContext,
} from "../../context/BusinessContext";
import "./style.css";
import { BusinessType } from "../../Types/BusinessType";

interface BusinessHandleButtonProps {
  business: BusinessType;
  asLink: boolean;
  handleBusinessClick: () => void;
}


export default function BusinessHandleButton({
  business,
  asLink,
  handleBusinessClick,
}: BusinessHandleButtonProps) {
  
  const businessContext =  useBusinessContext();

  if (!businessContext) {
    return null
  }
  const { setBusinessId } = businessContext;

  const handleBusinessId = (id: string) => {
    setBusinessId(id);
  };

  const handleClick = () => {
    handleBusinessClick();
  };

  const businessContent = (
    <li className="cat__item" key={business._id}>
      <img className="cat__img" src={business.images[0]} alt={business.name} />
      <div className="cat__text">
        <h4 className="cat__text-title">{business.name}</h4>
        <p className="cat__text-desc">{business.description}</p>
      </div>
    </li>
  );

  return asLink ? (
    <Button
      className="business-btn"
      component={Link}
      to={"/id/" + business._id}
      key={business._id}
      onClick={handleClick}
    >
      {businessContent}
    </Button>
  ) : (
    <Button
      className="business-btn"
      onClick={() => handleBusinessId(business._id)}
      key={business._id}
    >
      {businessContent}
    </Button>
  );
}

import { useContext, useState } from 'react';
import {BusinessContext, useBusinessContext} from "../../context/BusinessContext";
import { Button } from '@mui/material';
import './style.css';
import { ALL } from '../../constants/categoriesConstants';
// import { getBusinesses } from "./services/businessService";


//TODO: Rename to CategoryFilter component

export default function Categories() {
  //TODO: review the setFilteredBusinesses useState creation and whether it should be here
  const { businesses, categories, setFilteredBusinesses } = useBusinessContext();
  // const { businesses, categories, setFilteredBusinesses } = useContext(BusinessContext);

  const [selectedCategory, setSelectedCategory] = useState(ALL);

  const handleCategory = (cat) => {
    setSelectedCategory(cat);
    setFilteredBusinesses(
      businesses.filter((b) => {
        if (cat === ALL) return b;
        else return b.category === cat;
      })
    );
  };

  return (
    <div className="categories">
      {categories.map((cat) => (
        <Button
          key={cat._id}
          variant={selectedCategory === cat.name.en ? "contained" : "outlined"}
          onClick={() => handleCategory(cat.name.en)}
        >
          {cat.name.en}
        </Button>
      ))}
    </div>
  );
}
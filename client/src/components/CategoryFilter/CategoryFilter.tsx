import { SetStateAction, useState } from 'react';
import { useBusinessContext} from "../../context/BusinessContext";
import { Button } from '@mui/material';
import './style.css';
import { ALL } from '../../constants/categoriesConstants';


export default function CategoryFilter() {

  const businessContext =  useBusinessContext();

  if (!businessContext) {
    return null
  }
  const { businesses, categories, setFilteredBusinesses } = businessContext;

  const [selectedCategory, setSelectedCategory] = useState(ALL);

  const handleCategory = (cat: SetStateAction<string>) => {
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
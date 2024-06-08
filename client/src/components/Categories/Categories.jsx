import { useContext, useState } from 'react';
import BusinessContext from '../../context/BusinessContext';
import { Button } from '@mui/material';
import './style.css';
import { ALL } from '../../constants/categoriesConstants';
import { grey } from '@mui/material/colors';

export default function Categories() {
  const { businesses, categories, setFilteredBusinesses } =
    useContext(BusinessContext);
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
          variant={selectedCategory === cat.name.en ? 'contained' : 'outlined'}
          onClick={() => handleCategory(cat.name.en)}
          sx={{
            borderColor:
              selectedCategory === cat.name.en ? grey[700] : grey[500],
            color: selectedCategory === cat.name.en ? grey[700] : grey[500],
            '&:hover': {
              borderColor: grey[700],
              color: grey[700],
            },
          }}
        >
          {cat.name.en}
        </Button>
      ))}
    </div>
  );
}

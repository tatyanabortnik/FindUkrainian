import { useContext } from 'react';
import BusinessContext from '../../context/BusinessContext';
import { Button } from '@mui/material';
import './style.css';

export default function Categories() {
  const { businesses, categories } = useContext(BusinessContext);

  return (
    <div className="categories">
      <Button variant="outlined">ALL</Button>
      {categories.map((cat) => (
        <Button key={cat._id} variant="outlined">
          {cat.name.en}
        </Button>
      ))}
    </div>
  );
}

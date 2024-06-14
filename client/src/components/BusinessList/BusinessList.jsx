import { useContext } from 'react';
import {BusinessContext, useBusinessContext} from "../../context/BusinessContext.jsx";
import { ALL } from '../../constants/categoriesConstants';
import './style.css';
import BusinessHandleButton from '../BusinessHandleButton/BusinessHandleButton';

export default function BusinessList() {
  const { filteredBusinesses, categories } = useBusinessContext();
  // const { filteredBusinesses, categories } = useContext(BusinessContext);

  //TODO: review getAllCategories & getBusinessByCategory?

  return (
    <div className="business-list">
      {categories.map((c) => {
        if (c.name.en === ALL) return null; //dont render all option /* TODO: REVIEW - ALL is hardcoded => get */

        //TODO: filteredBuisnesses? review duplications of code?
        const businessesByCategory = filteredBusinesses.filter(
          (b) => b.category === c.name.en
        );

        if (!businessesByCategory.length) return null;

        return (
          <ul className="cat-container" key={c._id}>
            <h2 className="cat__title">{c.name.en}</h2>
            {businessesByCategory.map((b) => (
              <BusinessHandleButton key={b._id} business={b} />
            ))}
          </ul>
        );
      })}
    </div>
  );
}

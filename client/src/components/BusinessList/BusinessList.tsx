import { useBusinessContext} from "../../context/BusinessContext";
import { ALL } from '../../constants/categoriesConstants';
import './style.css';
import BusinessHandleButton from '../BusinessHandleButton/BusinessHandleButton';

export default function BusinessList() {
  const businessContext =  useBusinessContext();

  if (!businessContext) {
    return null
  }

  const { filteredBusinesses, categories } = businessContext;

  return (
    <div className="business-list">
      {categories.map((c) => {
        if (c.name.en === ALL) return null; 

        
        const businessesByCategory = filteredBusinesses.filter(
          (b) => b.category === c.name.en
        );

        if (!businessesByCategory.length) return null;

        return (
          <ul className="cat-container" key={c._id}>
            <h2 className="cat__title">{c.name.en}</h2>
            {businessesByCategory.map((b) => (
              <BusinessHandleButton key={b._id} business={b} asLink={false} handleBusinessClick={function (): void {} } />
            ))}
          </ul>
        );
      })}
    </div>
  );
}

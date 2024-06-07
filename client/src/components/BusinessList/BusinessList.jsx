import { useContext } from 'react';
import BusinessContext from '../../context/BusinessContext';

export default function BusinessList() {
  const { businesses, categories } = useContext(BusinessContext);

  return (
    <div className="businessList">
      {categories.map((c) => (
        <ul key={c._id}>{c.name.en}</ul>
      ))}
    </div>
  );
}

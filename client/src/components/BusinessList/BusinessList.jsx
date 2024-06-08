import { useContext } from 'react';
import BusinessContext from '../../context/BusinessContext';
import { ALL } from '../../constants/categoriesConstants';
import './style.css';

export default function BusinessList() {
  const { businesses, filteredBusinesses, categories } =
    useContext(BusinessContext);

  return (
    <div className="business-list">
      {categories.map((c) => {
        if (c.name.en === ALL) return null;

        const businessesByCategory = filteredBusinesses.filter(
          (b) => b.category === c.name.en
        );

        if (businessesByCategory.length === 0) return null;

        return (
          <ul className="cat-container" key={c._id}>
            <h2 className="cat__title">{c.name.en}</h2>
            {filteredBusinesses
              .filter((b) => b.category === c.name.en)
              .map((b) => (
                <li className="cat__item" key={b._id}>
                  <img className="cat__img" src={b.images[0]} alt={b.name} />
                  <div className="cat__text">
                    <h4 className="cat__text-title">{b.name}</h4>
                    <p className="cat__text-desc">{b.description}</p>
                  </div>
                </li>
              ))}
          </ul>
        );
      })}
    </div>
  );
}

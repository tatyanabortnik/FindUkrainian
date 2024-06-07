import BusinessList from '../BusinessList/BusinessList';
import Categories from '../Categories/Categories';
import Map from '../Map/Map';
import './style.css';

export default function Main() {
  return (
    <div className="main">
      <h1 className="title">Businesses</h1>
      <Categories />
      <section className="main__info">
        <BusinessList />
        <Map />
      </section>
    </div>
  );
}

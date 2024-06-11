import BusinessList from '../../components/BusinessList/BusinessList';
import Categories from '../../components/Categories/Categories';
import Map from '../../components/Map/Map';
import './style.css';

export default function Main() {
  return (
    <div id="main" className="main">
      <Categories />
      <section className="main__info">
        <BusinessList />
        <Map />
      </section>
    </div>
  );
}

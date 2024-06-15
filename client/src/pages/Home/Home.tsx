import BusinessList from '../../components/BusinessList/BusinessList';
import Categories from '../../components/CategoryFilter/CategoryFilter';
import Map from '../../components/Map/Map';
import './style.css';



export default function Home() {
  return (
    <div id="home" className="home">
      <Categories />
      <section className="home__info">
        <BusinessList />
        <Map />
      </section>
    </div>
  );
}

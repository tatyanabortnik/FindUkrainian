import { useEffect, useState } from 'react';
import './App.css';
import { getBusinesses, getCategories, getBusinessesByID } from './services/businessService';
import Header from './components/Header/Header';
import { Container, ThemeProvider } from '@mui/material';
import Main from './pages/Main/Main';
import BusinessContext from './context/BusinessContext';
import { theme } from './themes/theme';
import { Route, Routes } from 'react-router-dom';
import BusinessDetail from './pages/BusinessDetail/BusinessDetail';
import Footer from './components/Footer/Footer';

function App() {
  const [error, setError] = useState(null);
  // TODO: move these to context file?
  const [businesses, setBusinesses] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filteredBusinesses, setFilteredBusinesses] = useState([]);
  const [businessId, setBusinessId] = useState();


  
  useEffect(() => {
 
   const fetchBusinesses = async () => {
      try { 
        const data = await getBusinesses();
        setBusinesses(data);
        setFilteredBusinesses(data);
      }
      catch (e) {
        console.log("fetchBusinesses error:", e)
      }
    }
  

    const fetchCategories = async () => {
      try {
        const data = await getCategories();
        setCategories(data);
      }
      catch (e) {
        console.log('fetchCategories error:', e)
      }
    }

    const fetchBusinessesByID = async (id) => {
      try {
        const data = await getBusinessesByID(id)
        setBusinessId(data)
      } catch (e) {
        console.log('fetchBusinessesById error:', e)
      }
    }

  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
        {/* TODO: fix context */}
        <BusinessContext.Provider
          value={{
            businesses,
            categories,
            filteredBusinesses,
            setFilteredBusinesses,
            businessId,
            setBusinessId,
          }}
        >
          {/* TODO: route to error page instead -> create ERROR COMPONENT*/}
          {error ? (
            <div>Oops! Something went wrong. Please try again later.</div>
            ) : (
              <div className="app">
              <Header />
              <h1 className="title">Find 🇺🇦 services in Köln 🇩🇪</h1>
              <Routes>
                <Route path={'/'} element={<Main />} />
                <Route path={'/id/:id'} element={<BusinessDetail />} />
              </Routes>
              <Footer />
            </div>
          )}
        </BusinessContext.Provider>
      </Container>
    </ThemeProvider>
  );
}

export default App;

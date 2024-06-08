import { useEffect, useState } from 'react';

// import { Route, Routes } from 'react-router-dom';

import './App.css';
import { getBusinesses } from './services/businessService';

import Header from './components/Header/Header';
import { Container } from '@mui/material';
import Main from './components/Main/Main';
import BusinessContext from './context/BusinessContext';

function App() {
  const [error, setError] = useState(null);
  const [businesses, setBusinesses] = useState([]);
  const [filteredBusinesses, setFilteredBusinesses] = useState([]);

  const categories = [
    {
      _id: 'all_id',
      name: { en: 'all', uk: 'Всі' },
      description: {
        en: 'All services and products',
        uk: 'Всі послуги та продукти',
      },
    },
    {
      _id: '60d5ec49f491cc001ab5e4d1',
      name: { en: 'Restaurants', uk: 'Ресторани' },
      description: {
        en: 'Places where you can eat',
        uk: 'Місця, де можна поїсти',
      },
    },
    {
      _id: '60d5ec49f491cc001ab5e4d2',
      name: { en: 'Health', uk: "Здоров'я" },
      description: {
        en: 'Health-related services and products',
        uk: "Послуги та продукти, пов'язані зі здоров'ям",
      },
    },
    {
      _id: '60d5ec49f491cc001ab5e4d3',
      name: { en: 'Beauty', uk: 'Краса' },
      description: {
        en: 'Beauty salons and services',
        uk: 'Салони краси та послуги',
      },
    },
    {
      _id: '60d5ec49f491cc001ab5e4d4',
      name: { en: 'Grocery Stores', uk: 'Продуктові магазини' },
      description: {
        en: 'Stores selling food and everyday items',
        uk: 'Магазини, що продають продукти та повсякденні товари',
      },
    },
  ];

  console.log('App component is rendering');

  useEffect(() => {
    console.log('App component mounted');
    getBusinesses()
      .then((data) => {
        setBusinesses(data);
        setFilteredBusinesses(data);
      })
      .catch((error) => setError(error));

    return () => {
      console.log('App component unmounted');
    };
  }, []);

  return (
    <Container maxWidth="lg">
      <BusinessContext.Provider
        value={{
          businesses,
          categories,
          filteredBusinesses,
          setFilteredBusinesses,
        }}
      >
        <Header />
        <Main />
      </BusinessContext.Provider>
    </Container>
  );
}

export default App;

import { useEffect, useState } from 'react'
import './App.css'
import { getBusinesses, getCategories } from './services/businessService'
import Header from './components/Header/Header'
import { Container, ThemeProvider } from '@mui/material'
import Main from './pages/Main/Main'
import BusinessContext from './context/BusinessContext'
import { theme } from './themes/theme'
import { Route, Routes } from 'react-router-dom'
import BusinessDetail from './pages/BusinessDetail/BusinessDetail'
import Footer from './components/Footer/Footer'

function App() {
  const [error, setError] = useState(null)
  const [businesses, setBusinesses] = useState([])
  const [categories, setCategories] = useState([])
  const [filteredBusinesses, setFilteredBusinesses] = useState([])
  const [businessId, setBusinessId] = useState()

  useEffect(() => {
    getBusinesses()
      .then((data) => {
        setBusinesses(data)
        setFilteredBusinesses(data)
      })
      .catch((error) => setError(error))

    getCategories()
      .then((data) => {
        setCategories(data)
      })
      .catch((error) => setError(error))
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth='lg'>
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
          {error ? (
            <div>Oops! Something went wrong. Please try again later.</div>
          ) : (
            <div className='app'>
              <Header />
              <h1 className='title'>Find 🇺🇦 services in Köln 🇩🇪</h1>
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
  )
}

export default App

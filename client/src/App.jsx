import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { Container, ThemeProvider } from "@mui/material";
import Main from "./pages/Main/Main";
import {
  BusinessProvider,
} from "./context/BusinessContext.jsx";
import { theme } from "./themes/theme";
import { Route, Routes } from "react-router-dom";
import BusinessDetail from "./pages/BusinessDetail/BusinessDetail";
import Footer from "./components/Footer/Footer";

function App() {
  const [error, setError] = useState(null);

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
        <BusinessProvider>
          {/* TODO: route to error page instead -> create ERROR COMPONENT*/}
            {error ? (
              <div>Oops! Something went wrong. Please try again later.</div>
            ) : (
              <div className="app">
                <Header />
                <h1 className="title">Find 🇺🇦 services in Köln 🇩🇪</h1>
                <Routes>
                  <Route path={"/"} element={<Main />} />
                  <Route path={"/id/:id"} element={<BusinessDetail />} />
                </Routes>
                <Footer />
              </div>
            )}
        </BusinessProvider>
      </Container>
    </ThemeProvider>
  );
}

export default App;

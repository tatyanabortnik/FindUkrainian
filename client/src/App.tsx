import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Container, ThemeProvider } from "@mui/material";
import { theme } from "./themes/theme.js";
import { BusinessProvider } from "./context/BusinessContext.jsx";
import Header from "./components/Header/Header.jsx";
import Main from "./pages/Main/Main.jsx";
import BusinessDetail from "./pages/BusinessDetail/BusinessDetail.jsx";
import PageNotFound from "./pages/PageNotFound/PageNotFound.js";
import Footer from "./components/Footer/Footer.jsx";
import "./App.css";

function App() {
  const [error, setError] = useState<string | null>(null);

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
        <BusinessProvider>
          {error ? (
            <div>Oops! Something went wrong. Please try again later.</div>
          ) : (
            <div className="app">
              <Header />
              <h1 className="title">Find 🇺🇦 services in Köln 🇩🇪</h1>
              <Routes>
                <Route path={"/"} element={<Main />} />
                <Route path={"/id/:id"} element={<BusinessDetail />} />
                <Route path="*" element={<PageNotFound />} />
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

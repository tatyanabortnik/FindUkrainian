import { createContext } from "react";

const GlobalContext = createContext(null);

export const ContextProvider = ({ children }) => {
  const [businesses, setBusinesses] = useState([]);
  const [filteredBusinesses, setFilteredBusinesses] = useState([]);
  const [businessId, setBusinessId] = useState();

  const [categories, setCategories] = useState([]);

  return (
    <GlobalContext.Provider
      value={{
        businesses,
        setBusinesses,
        filteredBusinesses,
        setFilteredBusinesses,
        businessId,
        setBusinessId,
        categories,
        setCategories,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const globalContext = createContext(GlobalContext);
  if (globalContext === undefined) {
    throw new Error("useGlobalContext must be inside a ContextProvider");
  }
  return globalContext;
};

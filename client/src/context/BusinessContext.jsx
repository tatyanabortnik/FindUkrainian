import { useState , useEffect, createContext, useContext } from "react";
import {
  getBusinesses,
  getCategories,
  getBusinessesByID,
} from "../services/businessService";

export const BusinessContext = createContext(null);

export const BusinessProvider = ({ children }) => {
  const [businesses, setBusinesses] = useState([]);
  const [filteredBusinesses, setFilteredBusinesses] = useState([]);
  const [businessId, setBusinessId] = useState();
  const [categories, setCategories] = useState([]);

  const fetchBusinesses = async () => {
    try {
      const data = await getBusinesses();
      setBusinesses(data);
      setFilteredBusinesses(data);
    } catch (e) {
      console.log("fetchBusinesses error:", e);
    }
  };

  const fetchCategories = async () => {
    try {
      const data = await getCategories();
      setCategories(data);
    } catch (e) {
      console.log("fetchCategories error:", e);
    }
  };

  // const fetchBusinessesByID = async () => {
  //   try {
  //     const data = await getBusinessesByID(id);
  //     setBusinessId(data);
  //   } catch (e) {
  //     console.log("fetchBusinessesById error:", e);
  //   }
  // };

  useEffect(() => {
    fetchBusinesses();
    fetchCategories();
    // fetchBusinessesByID();
  }, []);

  return (
    <BusinessContext.Provider
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
    </BusinessContext.Provider>
  );
};

// export const useBusinessContext = ''
export const useBusinessContext = () => {
  const businessContext = useContext(BusinessContext);
  if (businessContext === undefined) {
    throw new Error("useBusinessContext must be inside a BusinessProvider");
  }
  return businessContext;
};

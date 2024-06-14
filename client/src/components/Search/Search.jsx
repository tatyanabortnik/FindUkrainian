import {
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { useBusinessContext } from "../../context/BusinessContext.jsx";
import SearchList from "../SearchList/SearchList";
import "./style.css";

export default function Search() {
  const [foundBusinesses, setFoundBusinesses] = useState([]);
  const [showSearchList, setShowSearchList] = useState(true);
  const [searchValue, setSearchValue] = useState("");

  const { businesses } = useBusinessContext();

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchValue(value);
    const foundBusinesses = businesses.filter((b) =>
      b.name.toLowerCase().includes(value)
    );
    setFoundBusinesses(foundBusinesses);
    setShowSearchList(true);
  };

  const handleBusinessClick = () => {
    setSearchValue("");
    setShowSearchList(false);
  };

  return (
    <>
      <FormControl
        className="search-form"
        sx={{ m: 1, width: "25ch" }}
        variant="outlined"
        size="small"
      >
        <InputLabel htmlFor="outlined-adornment-search">Search</InputLabel>
        <OutlinedInput
          autoComplete="false"
          id="outlined-adornment-search"
          endAdornment={
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          }
          label="Search"
          value={searchValue}
          onChange={(e) => handleSearch(e)}
        />

        {showSearchList &&
          foundBusinesses.length > 0 &&
          searchValue.length > 0 && (
            <SearchList
              foundBusinesses={foundBusinesses}
              handleBusinessClick={handleBusinessClick}
            />
          )}
      </FormControl>
    </>
  );
}

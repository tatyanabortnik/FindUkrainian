/* eslint-disable react/prop-types */
import { List } from '@mui/material';
import './style.css';
import BusinessHandleButton from '../BusinessHandleButton/BusinessHandleButton';
import { useTheme } from '@emotion/react';

export default function SearchList({ foundBusinesses, handleBusinessClick }) {
  const { palette } = useTheme();

  return (
    <List
      className="search-list"
      sx={{
        borderColor: palette.primary.main,
      }}
    >
      {foundBusinesses.map((b) => (
        <BusinessHandleButton
          key={b._id}
          business={b}
          asLink={true}
          handleBusinessClick={handleBusinessClick}
        />
      ))}
    </List>
  );
}

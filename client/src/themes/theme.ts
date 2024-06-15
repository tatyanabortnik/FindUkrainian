import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    primary: {
      light: '#3378c5',
      main: '#0057b7',
      dark: '#003c80',
      contrastText: '#fff',
    },
    secondary: {
      light: '#fee333',
      main: '#fedd00',
      dark: '#b19a00',
      contrastText: '#000',
    },
  },
  typography: {
    fontFamily: `"Playfair Display", "Arial", sans-serif`,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
});

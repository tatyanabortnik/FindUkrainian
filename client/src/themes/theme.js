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
    fontFamily: `"DM Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif`,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    h1: {
      fontFamily: `"Playfair Display", Georgia, serif`,
      fontWeight: 600,
    },
    h2: {
      fontFamily: `"Playfair Display", Georgia, serif`,
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 500,
          borderRadius: 10,
          padding: '8px 20px',
          transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
        },
        contained: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0 2px 8px rgba(0, 87, 183, 0.25)',
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#0057b7',
          },
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          '@media (max-width: 600px)': {
            paddingLeft: 16,
            paddingRight: 16,
          },
        },
      },
    },
  },
});

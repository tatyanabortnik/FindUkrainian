import logo from '../../assets/logo.svg';
import './style.css';

import Avatar from '@mui/material/Avatar';
import LanguageIcon from '@mui/icons-material/Language';
import { grey } from '@mui/material/colors';
import { IconButton, InputBase, Paper, Badge } from '@mui/material';
import { styled } from '@mui/material/styles';

import SearchIcon from '@mui/icons-material/Search';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

export default function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        <a href="#" className="logo">
          <img src={logo} alt="logo" />
        </a>
      </div>
      <div className="header__right">
        <Paper
          component="form"
          sx={{
            display: 'flex',
            alignItems: 'center',
            width: 200,
          }}
        >
          <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search" />
          <IconButton type="button">
            <SearchIcon />
          </IconButton>
        </Paper>

        <IconButton size="large">
          <LanguageIcon className="language"></LanguageIcon>
        </IconButton>

        <IconButton>
          <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            variant="dot"
          >
            <Avatar sx={{ bgcolor: grey[500], width: 38, height: 38 }}>
              TB
            </Avatar>
          </StyledBadge>
        </IconButton>
      </div>
    </div>
  );
}

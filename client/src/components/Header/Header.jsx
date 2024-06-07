import logo from '../../assets/logo.svg';
import './style.css';

import Avatar from '@mui/material/Avatar';
import LanguageIcon from '@mui/icons-material/Language';
import { deepPurple } from '@mui/material/colors';
import { IconButton, InputBase, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

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
            p: '2px 4px',
            display: 'flex',
            alignItems: 'center',
            width: 200,
          }}
        >
          <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search" />
          <IconButton type="button" sx={{ p: '10px' }}>
            <SearchIcon />
          </IconButton>
        </Paper>

        <IconButton size="large">
          <LanguageIcon className="language"></LanguageIcon>
        </IconButton>

        <Avatar sx={{ bgcolor: deepPurple[500] }}>TB</Avatar>
      </div>
    </div>
  );
}

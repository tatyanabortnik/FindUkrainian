import logo from '../../assets/logo.png';
import './style.css';
import Avatar from '@mui/material/Avatar';
import { IconButton, Badge, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Search from '../Search/Search';
import { Link } from 'react-router-dom';

export default function Header() {
  const { palette } = useTheme();

  return (
    //TODO: review MUI sx placements for all below
    <Box className="header" sx={{ borderColor: palette.primary.main }}>
      <div className="header__logo">
        {/* TODO: remove href */}
        <Link to={'/'} href="#" className="logo">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className="header__right">
        <Search />

        {/* FIXME: Review google translate button */}
        {/* this works funny and sometimes doesnt load. To see return to original btn, comment out 'iframe' rule in style.css */}
        <div id="google_translate_element" className="language"></div>

        <IconButton>
          <Badge
            className="styled-badge"
            overlap="circular"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            variant="dot"
          >
            <Avatar sx={{ bgcolor: palette.primary.main }} translate="no">
              TB
            </Avatar>
          </Badge>
        </IconButton>
      </div>
    </Box>
  );
}

import logo from '../../assets/logo.png';
import './style.css';

import Avatar from '@mui/material/Avatar';
import LanguageIcon from '@mui/icons-material/Language';
import { IconButton, Badge, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import Search from '../Search/Search';
import {
  initializeGoogleTranslate,
  loadGoogleTranslateScript,
} from '../../utils/googleTranslate';
import { Link } from 'react-router-dom';

export default function Header() {
  const { palette } = useTheme();
  const [googleTranslateLoaded, setGoogleTranslateLoaded] = useState(false);

  useEffect(() => {
    // Load Google Translate script when component mounts
    loadGoogleTranslateScript(() => {
      initializeGoogleTranslate();
      setGoogleTranslateLoaded(true);
    });
  }, []);

  const handleTranslateClick = () => {
    // Translate the page when translate button is clicked
    if (googleTranslateLoaded) {
      initializeGoogleTranslate();
    }
  };

  return (
    <Box className="header" sx={{ borderColor: palette.primary.main }}>
      <div className="header__logo">
        <Link to={'/'} href="#" className="logo">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className="header__right">
        <Search />

        <IconButton color="primary" size="large" onClick={handleTranslateClick}>
          <LanguageIcon className="language"></LanguageIcon>
        </IconButton>

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

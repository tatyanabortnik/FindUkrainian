import { IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import './style.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <p className="copyright-text">
        Copyright &copy; 2024 All Rights Reserved.
      </p>

      <ul className="social-icons">
        <IconButton
          href="https://github.com/tatyanabortnik/FindUkrainian"
          size="large"
        >
          <GitHubIcon fontSize="inherit" />
        </IconButton>
      </ul>
    </footer>
  );
}

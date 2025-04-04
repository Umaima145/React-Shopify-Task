import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import MenuIcon from '@mui/icons-material/Menu';
import Shopify_logo from '../assets/shopify-logo.png';
import '../App.css';
import Free_trial_btn from './Free_trial_btn';

const pages = ['Solutions', 'Pricing', 'Resources', 'Enterprise', "What's new"];
const dropdowns = ['Solutions', 'Resources', "What's new"];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [megaMenu, setMegaMenu] = React.useState(null);
  const [scrolled, setScrolled] = React.useState(false); // Track scroll state

  const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);

  const handleMegaMenuToggle = (menu) => {
    console.log('Toggling mega menu for:', menu);
    if (megaMenu === menu) {
      setMegaMenu(null); // Close menu
    } else {
      setMegaMenu(menu); // Open the selected menu
    }
  };

  const handleScroll = () => {
    console.log('Scrolling...', window.scrollY);
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  React.useEffect(() => {
    console.log('Adding scroll event listener...');
    window.addEventListener('scroll', handleScroll);

    return () => {
      console.log('Removing scroll event listener...');
      window.removeEventListener('scroll', handleScroll); // Clean up on unmount
    };
  }, []);

  React.useEffect(() => {
    console.log('Current scrolled state:', scrolled);
    console.log('Mega menu state:', megaMenu);
  }, [scrolled, megaMenu]);

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: scrolled || megaMenu ? 'black' : 'transparent', // Black if scrolled or megaMenu is open
        boxShadow: 'none',
        transition: 'background-color 0.3s ease', // Smooth transition for background color change
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>

          {/* LOGO */}
          <a href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <img className='header-logo' src={Shopify_logo} alt="Shopify"  />
          </a>

          {/* DESKTOP NAV */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, ml: 4 }}>
            {pages.map((page) => (
              <Box key={page} sx={{ display: 'flex', alignItems: 'center', position: 'relative', mr: 3 }}>
                <Button
                  className='nav-link'
                  onClick={() => dropdowns.includes(page) && handleMegaMenuToggle(page)}
                  sx={{
                    color: 'white',
                    fontSize: '16px',
                    textTransform: 'none',
                    '&:hover': { color: '#ccc' },
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    transition: 'color 0.3s ease',
                  }}
                >
                  {page}
                  {/* Custom rotating icon */}
                  {dropdowns.includes(page) && (
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        transition: 'transform 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55)', // Smooth rotation
                        transform: megaMenu === page ? 'rotate(270deg)' : 'rotate(90deg)',
                      }}
                    >
                      <svg
                        fill="#ffffff"
                        height="13px"
                        width="15px"
                        version="1.1"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 330 330"
                        xmlSpace="preserve"
                        stroke="#ffffff"
                        strokeWidth="13.2"
                      >
                        <path
                          id="XMLID_222_"
                          d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001 
                          c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394
                          c-5.857,5.858-5.857,15.355,0.001,21.213 C82.322,328.536,86.161,330,
                          90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,
                          4.394-6.628,4.394-10.606 C255,161.018,253.42,157.202,250.606,154.389z"
                        />
                      </svg>
                    </Box>
                  )}
                </Button>
              </Box>
            ))}
          </Box>

          {/* MEGA MENU */}
          {megaMenu && (
            <Box
              sx={{
                position: 'fixed',
                top: '64px',
                left: 0,
                width: '100%',
                backgroundColor: 'black',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                p: 4,
                zIndex: 10,
                animation: 'fadeIn 0.35s ease',
                '@keyframes fadeIn': {
                  from: { opacity: 0, transform: 'translateY(-10px)' },
                  to: { opacity: 1, transform: 'translateY(0)' },
                },
              }}
            >
              <Typography variant="h6" sx={{ mb: 2, color: '#fff' }}>
                {megaMenu} - Mega Menu Content
              </Typography>
              <Typography variant="body1" sx={{ color: '#fff' }}>
                This is sample content for the <strong>{megaMenu}</strong> mega menu.
              </Typography>
            </Box>
          )}

          {/* LOGIN / FREE TRIAL */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2, alignItems: 'center' }}>
            <Button variant="text" sx={{ color: 'white', textTransform: 'none' }}>
              Login
            </Button>
            <Free_trial_btn/>
          </Box>

          {/* MOBILE NAV */}
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton onClick={handleOpenNavMenu} sx={{ color: 'white' }}>
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;

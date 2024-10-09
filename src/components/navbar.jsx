import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import PhoneIcon from '@mui/icons-material/Phone';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import '../styles/App.css'; // Import the CSS file for styling

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu open/close

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <AppBar position="static" sx={{ background: 'transparent', boxShadow: 'none' }}>
      <Box>
        <Toolbar>
          {/* Left end: Company Name with Hamburger Icon */}
          <Box sx={{ position: 'relative', flexGrow: 1, display: 'flex', alignItems: 'center' }}>
            <IconButton
              edge="end"
              color="inherit"
              onClick={handleMenuToggle}
              sx={{
                display: { xs: 'block', md: 'none' }, // Show on mobile only
                position: 'absolute',
                left: '-20px', // Adjust this value to move the icon behind "Explore"
                zIndex: 0, // Behind the "Explore" text
                marginLeft: '10px' // Adjust for spacing
              }}
            >
              {isMenuOpen ? <CloseIcon /> : <MenuIcon />} {/* Toggle between Menu and Close icons */}
            </IconButton>

            <Typography variant="h4" sx={{ fontWeight: 'bold', position: 'relative', zIndex: 1, marginLeft: '30px' }}>
              Explore
            </Typography>
          </Box>

          {/* Middle side: Navigation Links */}
          <Box
            sx={{
              flexGrow: 3,
              display: { xs: isMenuOpen ? 'flex' : 'none', md: 'flex' }, // Show links when menu is open on mobile
              justifyContent: 'center',
              flexDirection: { xs: 'column', md: 'row' }, // Stack links vertically on mobile
              position: { xs: 'absolute', md: 'static' }, // Absolute positioning on mobile
              top: { xs: '40px', md: 'auto' }, // Positioning for mobile
              backgroundColor: { xs: 'rgba(255, 255, 255)', md: 'transparent' }, // Background for mobile
              borderRadius: '15px',
              width: { xs: '80%', md: 'auto' }, // Full width on mobile
              padding: { xs: '10px 20px', md: '0' }, // Padding for mobile
              boxShadow: { xs: '0px 2px 5px rgba(0,0,0,0.2)', md: 'none' }, // Shadow for mobile
              zIndex: 2, // Set higher zIndex for menu links
            }}
          >
            {/* Navigation Links */}
            {['Home', 'About Us', 'Destination', 'Services', 'Gallery', 'Blogs'].map((link, index) => {
              const isDummyLink = link === 'Destination' || link === 'Gallery' || link === 'Services' || link === 'Blogs';
              return (
                <NavLink
                  key={index}
                  to={link === 'Home' ? '/home' : link === 'About Us' ? '/about' : '#'} // Adjust link paths as necessary
                  className={({ isActive }) => 
                    isDummyLink 
                      ? (isActive ? 'nav-link mobile' : 'nav-link mobile') 
                      : (isActive ? 'nav-link active mobile' : 'nav-link mobile')
                  }
                  style={{ padding: '10px', textAlign: 'center' }} // Center and space out links
                >
                  {link}
                </NavLink>
              );
            })}
          </Box>

          {/* Right end: Phone Icon and Number */}
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <IconButton color="inherit">
              <PhoneIcon />
            </IconButton>
            <Typography variant="body1" sx={{ marginLeft: '8px' }}>
              +123-456-7890
            </Typography>
          </Box>
        </Toolbar>
      </Box>
    </AppBar>
  );
};

export default Navbar;

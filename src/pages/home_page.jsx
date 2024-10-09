import React, { useState } from 'react';
import Navbar from '../components/navbar';
import CustomButton from '../components/custom_button'; // Import the CustomButton component
import CustomTextField from '../components/custom_text_field'; // Import the CustomTextField
import Pagenation from './../components/pagenation';
import { Box, Container, Typography, useTheme, useMediaQuery } from '@mui/material';
import destinations from '../data/destinations';
import { NavLink } from 'react-router-dom';
import NavbarWeb from '../components/navbarweb';

function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Function to handle pagination
  const handlePagination = (direction) => {
    if (direction === 'next') {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % destinations.length);
    } else {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + destinations.length) % destinations.length);
    }
  };

  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${destinations[currentIndex].image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {
          isMobile ?
          (        <Navbar />
          ) :
          (<NavbarWeb></NavbarWeb>)
        }

        <Container style={{ height: '40px' }}></Container>

        {/* Central Black Box */}
        <Box
          sx={{
            backgroundColor: 'rgba(0, 0, 0, 0.2)', // Black box with 20% opacity
            color: 'white',
            paddingTop: '50px',
            borderRadius: '20px',
            textAlign: 'center',
            width: '80%', // Keep the same width for PCs
            margin: '20px 0',
            height: isMobile ? '400px' : '350px',
            position: 'relative',
            paddingBottom: '20px', // Add padding for bottom spacing
          }}
        >
          {/* Arrow Buttons */}
          <Box
            sx={{
              position: 'absolute',
              top: '10px',
              right: '10px',
            }}
          >
            <Pagenation onChange={handlePagination} />
          </Box>

          <Typography sx={{ fontWeight: 'bold', fontSize: isMobile ? '40px' : '100px', padding: isMobile ? '0 20px' : '0 0' }}>Explore Ethiopia</Typography>
          <Typography variant="h6" sx={{ padding: isMobile ? '0 20px' : '0 200px' }}>
            {destinations[currentIndex].description}
          </Typography>
          <Box
            sx={{
              position: 'absolute',
              bottom: isMobile ? '10px' : '50px', // Positioning at the bottom of the Box
              left: '50%',
              transform: 'translateX(-50%)', // Center the button horizontally
            }}
          >
            <NavLink
            to={'/about'}
            >
                        <CustomButton text="Learn More" />

            </NavLink>
          </Box>
        </Box>

        {/* Thin Long White Container */}
        <Container
          sx={{
            backgroundColor: 'white',
            padding: '10px',
            marginBottom: isMobile ? '30px' : '0',
            borderRadius: isMobile ? '25px' : '80px',
            width: '80%', // Keep the same width for PCs
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: isMobile ? 'column' : 'row', // Stack items vertically on mobile
          }}
        >
          <Container
            sx={{
              display: 'flex',
              justifyContent: 'start',
              alignItems: 'center',
              flexDirection: 'row',
              gap: isMobile ? '10px' : '20px', // Reduce gap for mobile
              flexWrap: 'wrap', // Allow items to wrap in smaller screens
            }}
          >
            <CustomTextField label="Where to?" />
            <CustomTextField label="When?" />
            <CustomTextField label="How many?" />
          </Container>

          <CustomButton text="Book Now" sx={{ marginTop: isMobile ? '10px' : '0' }} />
        </Container>
      </div>
    </div>
  );
}

export default HomePage;

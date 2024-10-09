import React from 'react';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';

function Mission() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        backgroundColor: 'rgba(255, 188, 0, 0.1)', // #FFBC00 with 10% opacity
        padding: '40px',
        maxWidth: '100%',
        textAlign: isMobile ? 'center' : 'start', // Center text for mobile
        margin: '20px 0',
      }}
    >
      <Typography
        variant="h5"
        sx={{
          color: 'black',
          marginTop: '20px',
        }}
      >
        <span
          style={{
            fontWeight: 'bold',
            color: '#FFBC00',
            fontSize: isMobile ? '28px' : '35px', // Smaller font size for mobile
          }}
        >
          Our Mission
        </span>{' '}
        is to offer unparalleled travel experiences across Ethiopia, blending adventure, culture, and nature. We aim to showcase the beauty of Ethiopia while ensuring sustainability, comfort, and unforgettable memories for our clients.
      </Typography>
    </Box>
  );
}

export default Mission;

import { Box, Typography, useMediaQuery } from '@mui/material';
import React from 'react';
import theme from '../styles/theme/theme';

function WhyChooseUs2({ image, title, body }) {
  const isMobile = useMediaQuery('(max-width:600px)'); // Detect if the screen is mobile

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row', // Column layout for mobile, row for desktop
        justifyContent: 'space-between',
        alignItems: isMobile ? 'center' : 'flex-start', // Center content on mobile
        margin: '20px 0',
        padding: isMobile ? '10px' : '20px 200px', // Adjust padding for mobile
      }}
    >
      {/* Image Section */}
      <Box sx={{ flex: 1, marginBottom: isMobile ? '20px' : '0', paddingRight: isMobile ? '0' : '80px' }}>
        <img
          src={image}
          alt="Why Choose Us"
          style={{
            width: isMobile ? '100%' : '500px', // Full width on mobile, fixed width on desktop
            borderRadius: '10px',
          }}
        />
      </Box>

      {/* Text Section */}
      <Box sx={{ flex: 2, textAlign: isMobile ? 'center' : 'left' }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 'bold',
            marginBottom: '10px',
          }}
        >
          {title}
        </Typography>

        {/* Horizontal Line (Separator) */}
        <Box
          sx={{
            width: '300px', // Adjust the width of the line
            height: '4px', // Adjust the thickness of the line
            backgroundColor: '#FFBC00',
            margin: isMobile ? '0 auto 15px' : '0 0 15px 0', // Center line on mobile
          }}
        />

        <Typography variant="h6" sx={{ color: theme.colors.grey }}>
          {body}
        </Typography>
      </Box>
    </Box>
  );
}

export default WhyChooseUs2;

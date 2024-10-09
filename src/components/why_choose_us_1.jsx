import { Box, Typography } from '@mui/material';
import React from 'react';
import theme from '../styles/theme/theme';

function WhyChooseUs1({ image, title, body }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '20px 0',
        padding: '20px 200px',
      }}
    >
      {/* Text Section */}
      <Box sx={{ flex: 2, textAlign: 'left' }}>
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
            width: '300px',    // Adjust the width of the line
            height: '4px',     // Adjust the thickness of the line
            backgroundColor: '#FFBC00',
            marginBottom: '15px', // Space between the line and body text
          }}
        />

        <Typography variant="h6" sx={{ color: theme.colors.grey, paddingRight: '60px' }}>
          {body}
        </Typography>
      </Box>

      {/* Image Section */}
      <Box sx={{ flex: 1 }}>
        <img
          src={image}
          alt="Why Choose Us"
          style={{
            width: '500px',
            borderRadius: '10px',
          }}
        />
      </Box>
    </Box>
  );
}

export default WhyChooseUs1;

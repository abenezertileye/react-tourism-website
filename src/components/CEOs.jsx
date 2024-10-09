import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import profile1 from '../assets/profile1.jpeg';
import profile2 from '../assets/profile2.jpeg';
import profile3 from '../assets/profile3.avif';
import profile4 from '../assets/profile4.jpeg';

// Sample data for CEOs
const ceos = [
  {
    name: 'Abenezer Tileye',
    image: profile3, // Replace with actual image URL
  },
  {
    name: 'Ebisa Elema',
    image: profile2, // Replace with actual image URL
  },
  {
    name: 'Dawit Shanko',
    image: profile1, // Replace with actual image URL
  },
  {
    name: 'Simon Dereje',
    image: profile4, // Replace with actual image URL
  },
];

const CEOs = () => {
  return (
    <Box sx={{ padding: '20px', marginBottom: '100px' }}>
      <Typography variant="h3" sx={{ textAlign: 'center', margin: '40px 0 80px' }}>
        Meet Our CEOs
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {ceos.map((ceo, index) => (
          <Grid item xs={6} sm={3} key={index}>
            <Box sx={{ textAlign: 'center' }}>
              <Box
                sx={{
                  width: '140px', // Increased size
                  height: '140px', // Increased size
                  borderRadius: '50%',
                  overflow: 'hidden',
                  margin: '0 auto', // Center the circle
                }}
              >
                <img
                  src={ceo.image}
                  alt={ceo.name}
                  style={{
                    width: '100%', // Cover the container
                    height: '100%', // Cover the container
                    objectFit: 'cover', // Ensure image covers the circle
                  }}
                />
              </Box>
              <Typography variant="body1">{ceo.name}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CEOs;

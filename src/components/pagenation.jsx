import React, { useEffect, useState } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Box, IconButton, useTheme, useMediaQuery } from '@mui/material';
import SpeechBubble from './speech_bubble'; // Import your speech bubble component

const Pagination = ({ onChange }) => {
  const [showBubble, setShowBubble] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Check if screen is mobile

  useEffect(() => {
    setShowBubble(true);
    const timer = setTimeout(() => {
      setShowBubble(false);
    }, 5000); // Hide the bubble after 5 seconds

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);

  return (
    <Box sx={{ display: 'flex', gap: '10px', position: 'relative' }}>
      {showBubble && <SpeechBubble />} {/* Show the speech bubble */}
      <IconButton
        onClick={() => onChange('prev')}
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.5)', // White with opacity
          borderRadius: '50%',
          padding: isMobile ? '5px' : '10px', // Smaller padding for mobile
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.7)', // Slightly darker on hover
          }
        }}
      >
        <ArrowBackIosIcon
          sx={{
            color: 'white',
            fontSize: isMobile ? '16px' : '24px', // Smaller icon size for mobile
          }}
        />
      </IconButton>
      <IconButton
        onClick={() => onChange('next')}
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.5)', // White with opacity
          borderRadius: '50%',
          padding: isMobile ? '5px' : '10px', // Smaller padding for mobile
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.7)', // Slightly darker on hover
          }
        }}
      >
        <ArrowForwardIosIcon
          sx={{
            color: 'white',
            fontSize: isMobile ? '16px' : '24px', // Smaller icon size for mobile
          }}
        />
      </IconButton>
    </Box>
  );
};

export default Pagination;

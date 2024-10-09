import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';

const SpeechBubble = () => {
  const [visible, setVisible] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    // Set visible to true to start the fade-in effect
    setVisible(true);
    setFadeIn(true);

    // Timer to remove the speech bubble after 3 seconds
    const timer = setTimeout(() => {
      setFadeIn(false); // Start fade-out effect
      setTimeout(() => setVisible(false), 500); // Wait for fade-out to finish before hiding
    }, 3000); // Change this to adjust how long the bubble is displayed (3000ms = 3 seconds)

    return () => clearTimeout(timer);
  }, []);

  return (
    <Box
      sx={{
        width: '120px',
        position: 'absolute',
        top: '-53px', // Adjust the vertical position as needed
        left: '50%',
        transform: 'translateX(-50%)',
        backgroundColor: 'rgba(255, 255, 255, 0.5)', // Light background
        color: 'black', // Change text color to be visible
        padding: '10px',
        borderRadius: '8px',
        zIndex: 1000, // Ensure it's above other elements
        opacity: fadeIn ? 1 : 0, // Fade in effect
        transition: 'opacity 0.5s ease-in-out', // Transition for fading
        display: visible ? 'block' : 'none', // Ensure the box is not rendered when not visible
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: '-19px', // Position the tail below the bubble
          left: '70%',
          transform: 'translateX(-50%)',
          borderWidth: '10px',
          borderStyle: 'solid',
          borderColor: 'rgba(255, 255, 255, 0.5) transparent transparent transparent', // Create the triangle effect
        },
      }}
    >
      <Typography variant="body2">Click to explore!</Typography>
    </Box>
  );
};

export default SpeechBubble;

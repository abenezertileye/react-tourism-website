import React, { useState } from 'react';
import { Box, Typography, IconButton, useMediaQuery } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import theme from './../styles/theme/theme';

// Sample comments array with names
const comments = [
  { text: "Ethiopia was breathtaking! The landscapes are unmatched.", name: "John Doe" },
  { text: "Amazing cultural experiences. I loved learning about the history.", name: "Jane Smith" },
  { text: "The tour guides were knowledgeable and very friendly.", name: "Michael Lee" },
];

// Testimonials Component
const TestimonialsData = ({ comments }) => {
  const [index, setIndex] = useState(0);
  const isMobile = useMediaQuery('(max-width:600px)'); // Detect mobile screens

  const handlePrev = () => {
    setIndex(index === 0 ? comments.length - 1 : index - 1);
  };

  const handleNext = () => {
    setIndex((index + 1) % comments.length);
  };

  return (
    <Box
      sx={{
        marginTop: isMobile ? '20px' : '40px',
        textAlign: 'center',
        width: '100%', // Full width of the parent
        display: 'flex', // Use flexbox
        flexDirection: 'column', // Stack vertically
        alignItems: 'center', // Center horizontally
        justifyContent: 'center', // Center vertically
        backgroundColor: 'rgba(255, 188, 0, 0.1)',
        padding: isMobile ? '30px 20px 50px' : '50px 50px 80px', // Responsive padding
      }}
    >
      <Typography variant={isMobile ? 'h4' : 'h3'} sx={{ textAlign: 'center', margin: '20px 0' }}>
        What Do Tourists Say?
      </Typography>

      <Box
        sx={{
          marginTop: '30px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: isMobile ? '90%' : '70%', // Adjust width for mobile
          position: 'relative',
        }}
      >
        <IconButton onClick={handlePrev} size={isMobile ? 'small' : 'medium'}>
          <ArrowBackIosIcon />
        </IconButton>

        <Box
          sx={{
            backgroundColor: 'white',
            padding: isMobile ? '15px' : '20px', // Adjust padding for mobile
            borderRadius: '10px',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
            textAlign: 'center',
            margin: isMobile ? '0 5px' : '0 10px', // Adjust margins for mobile
            width: '100%', // Make it take full width between the arrow buttons
            maxWidth: '500px', // Control max width of the box to prevent overflow
          }}
        >
          <Typography variant={isMobile ? 'h6' : 'h5'} sx={{ color: theme.colors.grey }}>
            " {comments[index].text} "
          </Typography>
          <Typography
            variant={isMobile ? 'body1' : 'h6'}
            sx={{
              marginTop: '10px',
              fontStyle: 'italic',
              color: theme.colors.grey,
            }}
          >
            - {comments[index].name}
          </Typography>
        </Box>

        <IconButton onClick={handleNext} size={isMobile ? 'small' : 'medium'}>
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

// Main Testimonials Component
function Testimonials() {
  return <TestimonialsData comments={comments} />;
}

export default Testimonials;
